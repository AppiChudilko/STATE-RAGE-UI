import React from 'react';
import addPlayerIcon from '../../img/icon_add_player.svg'
import persPlaceholder from '../../img/pers1.png'

class BoxCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'BoxCreate.jsx', error, errorInfo); // eslint-disable-line
    }

    clickCreatePlayer() {
        mp.trigger('client:events:createNewPlayer'); // eslint-disable-line
    };

    render() {
        return (
            <React.Fragment>
                <div className="change-create-player">
                    <div className="block-create">
                        <div className="block-innerhit">
                            <div className="summ-create">
                                <div className="createhero__box">
                                    <div className="round-blur" style={{backgroundImage: persPlaceholder}} onClick={this.clickCreatePlayer.bind(this)}>
                                        <img src={addPlayerIcon} width="32px" />
                                    </div>
                                    <img style={{position: 'absolute', zIndex: '-1'}} src={persPlaceholder} height="300px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BoxCreate;
