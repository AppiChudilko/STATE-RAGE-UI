import React from 'react';

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
                    <div className="border-top"></div>
                    <div className="block-create">
                        <div className="block-innerhit">
                            <div className="summ-create">
                                <svg xmlns="http://www.w3.org/2000/svg" width="112px" height="112px">
                                    <path className="color-svg-create-grey" fillRule="evenodd" fill=""
                                          d="M112.000,60.667 L60.667,60.667 L60.667,112.000 L51.333,112.000 L51.333,60.667 L-0.000,60.667 L-0.000,51.333 L51.333,51.333 L51.333,-0.000 L60.667,-0.000 L60.667,51.333 L112.000,51.333 L112.000,60.667 Z"/>
                                </svg>
                            </div>
                            <div className="create-btn" onClick={this.clickCreatePlayer.bind(this)}>СОЗДАТЬ</div>
                        </div>
                    </div>
                    <div className="border-bottom"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default BoxCreate;
