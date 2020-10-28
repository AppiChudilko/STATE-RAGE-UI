import React from 'react';

class InfoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    selectChar(name, spawnName) {
        mp.trigger('client:events:selectPlayer', // eslint-disable-line
            name, spawnName);
    }

    changeImg() {
        if (this.props.info_player[this.props.index].player.sex === "w") {
            return "player_women";
        } else {
            if (this.props.info_player[this.props.index].player.old > 100) {
                return "player_old";
            } else {
                return "player_young";
            }
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'InfoPlayer.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="change-create-player">
                    <div className="border-top"></div>
                    <div className="info-player">
                        <div className={this.changeImg()}></div>
                        <div className="name-player-info">{this.props.name}</div>
                        <div className="info-text-player">
                            <div className="text-box">
                                <span className="title-info-text">Вы играли</span> <span
                                className="text-box-blue">{this.props.old}ч.</span>
                            </div>
                            <div className="text-box">
                                <span className="title-info-text">Деньги</span> <span
                                className="text-box-blue">{this.props.money}</span>
                            </div>
                            <div className="text-box">
                                <span className="title-info-text">Последний вход</span> <span
                                className="text-box-blue">{this.props.date}</span>
                            </div>
                        </div>
                        <div className="slider-home-player">
                            <div className="button-slider-home trans-arr"
                                 onClick={() => this.props.clickLeftArrow(this.props.index)}></div>
                            <span>{this.props.spawn[this.props.index_spawn]}</span>
                            <div className="button-slider-home arro-right"
                                 onClick={() => this.props.clickRightArrow(this.props.index)}></div>
                        </div>
                        <div className="create-btn"
                             onClick={() => this.selectChar(this.props.name, this.props.spawn[this.props.index_spawn])}>Войти
                        </div>
                    </div>
                    <div className="border-bottom"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default InfoPlayer;
