const db = require('./dbController')
const Kri = require(__dirname + "\\Kriterii.json")

module.exports.dynamic = async function (req, res) {
  let info = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.LastName + ' ' + user.FirstName
    let Achievements = []
    let Comments = []
    let AchId = []
    for (let achievement of user.Achievement) {
      let ach = await db.findAchieveById(achievement)
      if (ach.status === 'Ожидает проверки') {
        Achievements.push(ach.crit)
        AchId.push(ach._id)
        Comments.push(ach.comment)
      }
    }
    info.push({ Id: user._id, user: str, Comments: Comments, Achievements: Achievements, AchId: AchId })
  }
  res.status(200).send({ Info: info })
}

module.exports.AchSuccess = async function (req, res) {
  await db.ChangeAchieve(req.body.Id, true)
  balls(req.user._json.email)
}

module.exports.AchFailed = async function (req, res) {
  await db.ChangeAchieve(req.body.Id, false)
}

module.exports.Checked = async function (req, res) {
  let info = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.LastName + ' ' + user.FirstName
    let Achievements = []
    let Comments = []
    let AchId = []
    let Status = []
    for (let achievement of user.Achievement) {
      let ach = await db.findAchieveById(achievement)
      if (ach.status !== 'Ожидает проверки') {
        Achievements.push(ach.type)
        AchId.push(ach._id)
        Comments.push(ach.comment)
        Status.push(ach.status)
      }
    }
    info.push({ Id: user._id, user: str, Comments: Comments, Achievements: Achievements, AchId: AchId, Status: Status })
  }
  res.status(200).send({ Info: info })
}

module.exports.allUsers = async function (req, res) {
  let ip = await req.url.slice(6)
  let User = await db.findUser(ip)
  let Achs = []
  for (let i of User.Achievement) {
    let Ach = await db.findAchieveById(i)
    let files = Ach.files
    let date = Ach.date
    let crit = Ach.crit
    let popisal = Ach.comment
    let status = Ach.status
    let Achieve = {
      Files: files,
      Date: date,
      Crit: crit,
      Popisal: popisal,
      Status: status
    }
    Achs.push(Achieve)
  }
  res.status(200).send({ LastName: User.LastName, FirstName: User.FirstName, Achs: Achs })
}


module.exports.getRating = async function (req, res) {
  let users = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.LastName + ' ' + user.FirstName
    users.push({ Name: str, Ball: user.Ball })
  }
  res.status(200).send({ Users: users })
}

const balls = async function (id) {
  let kri = JSON.parse(JSON.stringify(Kri))
  let balls = 0
  let Achs = await db.UserSeccesAchs(id)
  let kriteries = {}

  for (key of Object.keys(kri)) {
    kriteries[key] = []
  }

  for(let ach of Achs) {
      console.log(ach);
      let curKrit = kri[ach.crit];
      if (Array.isArray(curKrit)) {
          kriteries[ach.crit].push(curKrit)
      }
      else {
          for (let ch of ach.chars) {
              console.log(Object.keys(curKrit), ch)
              curKrit = curKrit[ch]
          }
          kriteries[ach.crit].push(curKrit)
      }
  }

    for (key of Object.keys(kri)) {
        balls += MatrBalls(kriteries[key])
    }

  db.setBalls(id,balls)
}

const MatrBalls = function(M){
  let S = 0
  let max = 0
    console.log(M)
  for(let i = 0; i < M.length; ++i){
      for(let j=0; j < M.length; ++j){
        if(M[j][i] > max){
          max = M[j][i]
          var q = j
        }
      }
      M[q] = [0,0,0,0,0,0]
      S+=max
      max = 0
  }
  return S
}