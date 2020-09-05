import React, {Component} from 'react';
import '../../../../style/user_main.css';
import CurrentAchievesTable from './currentAchievesTable';
import userAchievesStore from '../../../../stores/userAchievesStore';
import {observer} from 'mobx-react';
import {css, jsx} from '@emotion/core';
/** @jsx jsx */
import styled from '@emotion/styled';
import {BASE_API_URL} from '../../../../common/constants';
const horizontalLine = css`
    border-top: 1px solid #9F2D20;
`;

// a20800
const mainButton = css`
    color: #fff;
    background-color: #9F2D20;
    border-color: #9F2D20;
    
    &:focus {
        box-shadow: 0 0 0 .2rem #f1c8c6;
    }
`;

const Panel = styled.div`
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;


class UserAchieves extends Component {
  constructor(props) {
    super(props);
    this.checkConfirms = this.checkConfirms.bind(this);
  };

  componentDidMount() {
    userAchievesStore.getAchieves();
  }

  checkConfirms(e) {
    const achsWithoutConfirms = [];
    let message = '\n';
    for (const ach of userAchievesStore.achieves) {
      if (!ach.confirmations || ach.confirmations.length === 0) {
        if (ach.crit !== '1 (7а)' && ach.crit !== '7а') {
          achsWithoutConfirms.push(ach);
          message += ach.crit + '. ' + ach.achievement + '\n';
        }
      }
    }

    if (achsWithoutConfirms.length > 0) {
      // eslint-disable-next-line
      if (!confirm(
          'У Вас есть достижения, к которым не приложены подтверждения:\n' +
          message +
          '\nВы уверены, что хотите скачать документы?')) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }

  render() {
    let summaryBall = 0;
    if (userAchievesStore.achieves) {
      for (const ach of userAchievesStore.achieves) {
        if (ach.status == 'Принято' || ach.status == 'Принято с изменениями') {
          summaryBall += ach.ball;
        }
      }
    }
    return (<Panel css={css`padding: 1rem;`} className="col-md-9">

      <div>
        <div css={css`display: flex; justify-content: space-between;`}>
          <div css={css`
        height: max-content; 
        margin-top:auto; 
        margin-bottom: auto; 
        color: black;
        font-size: larger;
        `}>
            <b>Текущие достижения</b>
          </div>
          <form action={BASE_API_URL + '/getAnket'} onSubmit={this.checkConfirms}>
            <input type="submit" id="download" className="btn" css={mainButton} value="Скачать анкету"/>
          </form>
        </div>
        <hr css={horizontalLine}/>
        <div css={css`width: 100%; min-height: 10rem;`}>
          < CurrentAchievesTable currentAchieves={userAchievesStore.achieves}/>
        </div>
        <div css={css`background-color: #4C4C4C; color: white; width: 100%; padding: 5px 5px 5px 1rem; margin-bottom: 1rem;`}>
          Архив достижений
        </div>
	<div css={css`width: 100%; min-height: 10rem;`}>
          <table>
          {userAchievesStore.archivedAchieves && userAchievesStore.archivedAchieves.map((x) => <tr><td css={css`width:5%; border-top: 1px solid #e3e3e3;`}>{x.crit}</td><td css={css`width:70%; border-top: 1px solid #e3e3e3;`}>{x.achievement}</td><td css={css`border-top: 1px solid #e3e3e3;`}>{(new Date(x.achDate)).toLocaleDateString('ru-RU')}</td><td css={css`border-top: 1px solid #e3e3e3;`}>{(x.status !== 'Ожидает проверки') && x.status}</td></tr>)}
          </table>
        </div>

      </div>
    </Panel>);
  }
}

export default observer(UserAchieves);
