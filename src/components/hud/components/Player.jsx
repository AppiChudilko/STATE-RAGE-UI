import React from 'react';
import EventManager from "../../../EventManager";

import Draggable from '../Draggable'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            microphone: false,
            drink: 100,
            eat: 100,
            wallet: "Идёт загрузка...",
            card: "Идёт загрузка...",
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Player.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('hudp', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({microphone: value.microphone});
                this.setState({drink: value.drink});
                this.setState({eat: value.eat});
                this.setState({wallet: value.wallet});
                this.setState({card: value.card});
                this.setState({background: value.background});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudp');
    }

    formatCurrency(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="player-hud">

                        <Draggable id="player-mic" className="phud-mic" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className={this.state.microphone ? 'mic-img use-mic' : 'mic-img'}></div>
                        </Draggable>
                    
                        <Draggable id="player-needs" className="phud-needs" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className="needs-box">
                                <div className="img-drink"></div>
                                <div className="liner-needs">
                                    <div className="color-liner"
                                        style={{width: this.state.drink + '%', background: this.state.color}}></div>
                                </div>
                                <div className="needs-text">{this.state.drink}%</div>
                            </div>
                            <div className="needs-box">
                                <div className="img-eat"></div>
                                <div className="liner-needs">
                                    <div className="color-liner"
                                        style={{width: this.state.eat + '%', background: this.state.color}}></div>
                                </div>
                                <div className="needs-text">{this.state.eat}%</div>
                            </div>
                        </Draggable>
                    
                        <Draggable id="player-money" className="phud-money" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className="money-box">
                                <div className="img-wallet"></div>
                                <div className="wallet-text" style={{color: this.state.color}}>{this.state.wallet}</div>
                            </div>
                            <div className="money-box">
                                <div className="img-credit-card"></div>
                                <div className="credit-text">{this.state.card}</div>
                            </div>
                        </Draggable>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Player;
