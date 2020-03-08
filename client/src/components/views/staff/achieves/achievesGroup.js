import React, {Component} from 'react';
import '../../../../style/admin.css';
import AchievesTable from './achievesTable';
import StaffChangeAchievement from '../StaffChangeAchievement';
import Modal from 'react-modal';
import staffContextStore from '../../../../stores/staff/staffContextStore';

class AchievesGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleHide = this.toggleHide.bind(this);
    this.toggleRating = this.toggleRating.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  };

  toggleModal() {
    if (this.state.modalIsOpen) {
      this.setState({choosedDirection: false, modalIsOpen: !this.state.modalIsOpen});
    } else {
      this.setState({modalIsOpen: !this.state.modalIsOpen});
    }
  }

  async toggleRating() {
    const id = this.props.item.Id;
    let direction;
    if (!this.props.item.IsInRating && staffContextStore.faculty == 'ВШЖиМК') {
      this.toggleModal();
      const waitForAnswer = (resolve, reject) => {
        if (this.state.choosedDirection) {
          resolve(this.state.choosedDirection);
        } else if (this.state.choosedDirection === false) {
          reject('null');
        } else {
          setTimeout(() => waitForAnswer(resolve, reject), 30);
        }
      };
      try {
        direction = await new Promise(waitForAnswer);
        this.setState({choosedDirection: undefined});
      } catch (e) {
        this.setState({choosedDirection: undefined});
        return null;
      }
    }

    if (!this.props.item.IsInRating) {
      fetch('/api/AddToRating', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: direction ? JSON.stringify({Id: id, Direction: direction}) : JSON.stringify({Id: id}),
      }).then((resp) => {
        if (resp.status === 200) {
          this.props.updater();
        }
      })
          .catch((error) => console.log(error));
    } else {
      fetch('/api/RemoveFromRating', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Id: id}),
      }).then((resp) => {
        if (resp.status === 200) {
          this.props.updater();
        }
      })
          .catch((error) => console.log(error));
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.filters.hideCheckedAchieves) {
      let needHide = true;
      for (const ach of this.props.item.Achievements) {
        if (ach.status != 'Принято' && ach.status != 'Принято с изменениями') {
          needHide = false;
          if (this.state.hidden !== false) {
            this.setState({hidden: false});
          }
          break;
        }
      }
      if (needHide && !this.state.hidden) {
        this.setState({hidden: true});
      }
    } else
    if (this.state.hidden) this.setState({hidden: false});
  }

  componentDidMount() {
    this.setState({hidden: false});
  }

  toggleHide() {
    const state = this.state;
    state.hidden = !state.hidden;
    this.setState(state);
  }

  render() {
    return (
      <div>
        {this.state &&
                <div className="name">
                  <div style={{'width': '100%', 'textAlign': 'center', 'height': 'auto'}}
                    className="input-group headerContainer">
                    <div className={'nameHeader' + (this.props.item.IsInRating ? ' inRating' : '')}
                      style={{'textAlign': 'center'}}>
                      <i className={'fas fa-chevron-' + (this.state.hidden ? 'right' : 'down') + ' mychevron'}
                        onClick={this.toggleHide}></i>
                    </div>
                    <h3 className={'form-control nameHeader' + (this.props.item.IsInRating ? ' inRating' : '')}
                      style={{'border': '0', 'boxShadow': 'none'}}>
                      <a style={{'color': 'white'}} target="_blank" href="/">{this.props.item.user}</a>
                    </h3>
                    <div className="input-group-append">
                      <button type="button" className="btn btn-dark btn-xs newAchievesGroupButton"
                        onClick={this.toggleRating}>
                        {this.props.item.IsInRating ? 'Убрать из рейтинга' : 'Добавить в рейтинг'}</button>
                    </div>
                  </div>
                  {!this.state.hidden && <div className="block">

                    <AchievesTable data={this.props.item.Achievements} userId={this.props.item.Id} updater={this.props.updater}
                      openModal={this.props.openModal} filters={this.props.filters}/>
                  </div>}
                </div>}
        <Modal className="Modal" style={{content: {'z-index': '111'}, overlay: {'z-index': '110'}}}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          {this.state.modalIsOpen &&
                    <div style={{width: '400px', height: '250px', backgroundColor: 'white', padding: '15px'}}>
                      <h2>Выберите направление:</h2>
                      <p style={{marginBottom: '40px'}}>{this.props.item.user}</p>
                      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        {staffContextStore.directions.map((dir) =>
                          <button className='btn btn-warning'
                            style={{marginBottom: '15px'}}
                            onClick={() => {
                              this.setState({choosedDirection: dir, modalIsOpen: false});
                            }}>
                            {dir}
                          </button>)}
                      </div>
                    </div>
          }
        </Modal>
      </div>
    );
  }
}

export default AchievesGroup;
