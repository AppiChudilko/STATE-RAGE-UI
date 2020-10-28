import React from 'react';

import "./css/license.css"
import img_woman from "./img/woman.png"
import img_man from "./img/man.png"
import EventManager from "../../EventManager";

class License extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            player_info: {
                name: 'Olejka Pelmeshka',
                sex: 'Мужской',
                license: 'Лицензия на оружие',
                date_start: '01.01.2019',
                date_stop: '01.01.2020',
                prefix: 'G',
                img: '',//https://a.rsg.sc//n/lendstoun
            },
            photo: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'License.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('license', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({player_info: value.info})
                this.setState({show: value.isShow})
                this.checkSexandImg();
            } else return;
        })

        this.checkSexandImg();
    }

    componentWillUnmount() {
        EventManager.removeHandler('license');
    }

    checkSexandImg() {

        if (this.state.player_info.img === '') {
            if (this.state.player_info.sex === 'Мужской') {
                this.setState({photo: img_man});
            } else {
                this.setState({photo: img_woman});
            }
        } else {
            this.setState({photo: this.state.player_info.img})
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="license-main">
                    <div className="lic-box">
                        <div className="lic-in-box">
                            <div className="lic-left">
                                <div className="lic-photo_player">
                                    <img src={this.state.photo} className="lic-img" alt=""/>
                                </div>
                            </div>
                            <div className="lic-right">
                                <div className="lic-name">{this.state.player_info.name}</div>
                                <div className="lic-info">
                                    <div className="lic-grow tsp-lic tsp-fff">Тип лицензии</div>
                                    <div className="lic-white tsp-lic">{this.state.player_info.license}</div>
                                    <div className="lic-first-inf">
                                        <div className="tpc-right-ff">
                                            <div className="lic-grow">Дата выдачи</div>
                                            <div className="lic-white">{this.state.player_info.date_start}</div>
                                        </div>
                                        <div>
                                            <div className="lic-grow">Дата окончания</div>
                                            <div className="lic-white">{this.state.player_info.date_stop}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-letter">{this.state.player_info.prefix}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default License;
