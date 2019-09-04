import {decorate, observable} from 'mobx';

class CurrentContestStore {
    users = [];

    update() {
        fetch("/api/checked", {
            method: "GET"
        }).then((resp) => {
            return resp.json()
        })
            .then((data) => {
                this.users = data.Info
            })
            .catch((error) => console.log(error))
    }

    constructor() {

    }
}

decorate(CurrentContestStore, {
    users: observable
});

export default new CurrentContestStore();