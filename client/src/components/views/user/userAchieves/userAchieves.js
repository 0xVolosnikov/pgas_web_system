import React, {Component} from 'react';
import '../../../../style/user_main.css';
import CurrentAchievesTable from "./currentAchievesTable";
import userAchievesStore from "../../../../stores/userAchievesStore";
import {observer} from "mobx-react";

class UserAchieves extends Component {
    constructor(props) {
        super(props);


    };

    componentDidMount() {
        this.getAchieves();
    }

    getAchieves() {
        fetch("/api/getUserInfo", {
            method: "GET"
        }).then((resp) => {
            return resp.json()
        })
            .then((data) => {
                data.Achs = data.Achs.sort(function (obj1, obj2) {
                    return Number.parseInt(obj1.crit.substr(0, 2)) > Number.parseInt(obj2.crit.substr(0, 2))
                });
                userAchievesStore.achieves = data.Achs
            });
    }

    render() {
        let summaryBall = 0
        if (userAchievesStore.achieves)
        for (let ach of userAchievesStore.achieves)
            if (ach.status == 'Принято' || ach.status == 'Принято с изменениями')
                summaryBall += ach.ball
        return (<div className="col-md-9 rightBlock" id="panel">

            <p id="username" className="headline">{this.props.userName}</p>
            <hr className="hr_blue"/>
            <div className="profile">
                <div style={{'margin-top': 'auto', 'margin-bottom': 'auto'}}><span>Факультет: </span>
                    <faculty id="faculty" className="info">{this.props.faculty}</faculty>
                    <span style={{'margin-left': 1 + 'rem'}}>Курс: </span>
                    <course id="course" className="info">{this.props.course}</course>
                </div>
                <form action="/api/getAnket">
                    <input type="submit" id="download" className="btn btn-primary anket_button" value="Скачать анкету"/>
                </form>
            </div>

            <div className="category">
                <h3 className="achGroup" style={{display: 'flex', justifyContent: 'space-between'}}>
                    Текущие достижения. <p style={{textAlign: 'right', margin: '0'}}>Суммарный балл: {summaryBall}</p></h3>
                <CurrentAchievesTable currentAchieves={userAchievesStore.achieves}/>
            </div>

            <div className="category">
                <h3 className="achGroup">Архив достижений</h3>
                <block_1 style={{border:"none"}}>
                    <div id="archive_docs"></div>
                </block_1>
            </div>
        </div>)
    }
}

export default observer(UserAchieves)