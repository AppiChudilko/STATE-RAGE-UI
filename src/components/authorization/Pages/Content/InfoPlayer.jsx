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
                <div className={`change-create-player ${this.props.index === 0 ? 'change-create-player-center' : ''}`}>
                    <div className="info-player">
                        <div className="accinfo__container">
                            <div className="text-box__container">
                                <div className="text-box">
                                    <span className="title-info-text">{`Наиграно часов: ${this.props.old}`}</span>
                                </div>
                                <div className="text-box">
                                    <span className="title-info-text">{`Общий баланс: ${this.props.money}$`}</span>
                                </div>
                            </div>
                            <div className="text-box__container">
                                <div className="text-box">
                                    <span className="title-info-text">{`Последний вход: ${this.props.date}`}</span>
                                </div>
                                <div className="text-box">
                                    <span className="chevron-left"
                                        onClick={() => this.props.clickLeftArrow(this.props.index)}></span>
                                    <span>{`Место респавна: ${this.props.spawn[this.props.index_spawn]}`}</span>
                                    <span className="chevron-right"
                                        onClick={() => this.props.clickRightArrow(this.props.index)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="create-btn__container">
                            <span
                                className="create-btn"
                                onClick={() => this.selectChar(this.props.name, this.props.spawn[this.props.index_spawn])}
                            >
                                {this.props.name}
                            </span>
                            <span className="chevron-top" style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.5)'}} />
                            <span className="create-btn__hint">
                                Нажмите, чтобы войти
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default InfoPlayer;
