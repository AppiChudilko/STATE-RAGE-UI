import React from 'react';
import ChangePlayer from './Content/ChangePlayer';


class CreatePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'CreatePlayer.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="reg-main">
                    <div className="bg-left-create">
                        <span className="title-dednet">DEDNET</span>
                        <div className="position-bg-bottom">
                            <div className="create-bg-bottom" id="adaptive-bg-right"></div>
                        </div>
                    </div>
                    <div className="bg-right-create">
                        <div className="create-logo"></div>
                        <div className="create-bg-right" id="adaptive-bg-right"></div>
                    </div>
                    <div className="create-content">
                        <ChangePlayer/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreatePlayer;
