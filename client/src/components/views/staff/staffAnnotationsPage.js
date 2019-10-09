import React, {Component} from 'react';
import '../../../style/user_main.css';
import '../../../style/add_portfolio.css';
import {observer} from "mobx-react";
import staffContextStore from "../../../stores/staff/staffContextStore";
import ReactMarkdown from "react-markdown";
import {fetchSendWithoutRes} from "../../../services/fetchService";

class StaffAnnotationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {annotations: {}, criterias: {}}
        if (staffContextStore.annotations) this.state.annotation = staffContextStore.annotations
        if (staffContextStore.learningProfile) this.state.learningProfile = staffContextStore.learningProfile
    };

    async componentDidMount() {
        if (!staffContextStore.criterias || !staffContextStore.schema) {
            staffContextStore.getCritsAndSchema().then()
        }

        await staffContextStore.getAnnotations();
        let st = this.state;
        if (staffContextStore.annotations) st.annotations = staffContextStore.annotations
        if (staffContextStore.learningProfile) st.learningProfile = staffContextStore.learningProfile
        this.setState(st)
    }


    saveAnnotations() {
        fetchSendWithoutRes('/api/updateAnnotations', {
            faculty: staffContextStore.faculty,
            annotations: this.state.annotations,
            learningProfile: this.state.learningProfile
        }).then((res) => {
            if (res) {
                staffContextStore.getAnnotations().then();
                this.props.history.push('/staff')
            }
        })
    }

    render() {
        return (
            <main>
                <div id="panel" className="row justify_center">
                    <div className="col-9 general">
                        <div className="profile" style={{"display": "flex", "justify-content": "space-between"}}>
                            <div className="centered_ver">
                                <p className="headline">
                                    Управление примечаниями
                                </p>
                            </div>
                            <div style={{display: "flex"}}>
                                <div className="centered_ver">
                                    <button id="DeleteButton" className="btn btn-danger"
                                            value="Назад" onClick={() => {
                                        this.props.history.goBack()
                                    }}>Назад
                                    </button>
                                </div>
                                <div className="centered_ver">
                                    <button id="DeleteButton" className="btn btn-success"
                                            value="Назад" onClick={() => {
                                        this.saveAnnotations()
                                    }}>Сохранить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="hr_blue"/>
                        <h5>Какой у вас профиль обучения (что является ДСПО):</h5>
                                            <textarea className="form-control area_text"
                                                      placeholder="Введите примечания к критерию..." onChange={(e) => {

                                                let st = this.state;
                                                st.learningProfile = e.target.value;
                                                this.setState(st)
                                            }}
                                                      value={this.state.learningProfile} style={{margin: "0"}}/>

                        {
                            staffContextStore.criterias &&
                            <div>
                                {
                                    Object.keys(staffContextStore.criterias).map((crit) => {
                                        return (<>
                                            <h5>{crit}</h5>
                                            <div style={{display: "flex"}}>
                                            <textarea className="form-control area_text"
                                                      placeholder="Введите примечания к критерию..." onChange={(e) => {

                                                let st = this.state;
                                                st.annotations[crit] = e.target.value;
                                                this.setState(st)
                                            }}
                                                      value={this.state.annotations[crit]} style={{margin: "0"}}/>
                                                <div className="desc_selectors"
                                                     style={{whiteSpace: "pre-line", margin: "0", width: "50%"}}>
                                                    <ReactMarkdown className="markdown_view" linkTarget={() => '_blank'}
                                                                   source={this.state.annotations[crit]}/>
                                                </div>
                                            </div>
                                            <br/>
                                        </>)
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </main>)
    }
}

export default observer(StaffAnnotationsPage)