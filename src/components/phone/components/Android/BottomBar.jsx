import React from 'react';
import {Link} from "react-router-dom";

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'BottomBar.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="m_keys_bar">
                    <Link to="/phone/android/defaultpage">
                        <div className="m-trngl-bar" onClick={() => this.props.clickBack()}></div>
                    </Link>
                    <Link to="/phone/android/defaultpage">
                        <div className="m-crl-bar" onClick={() => this.props.clickHome()}></div>
                    </Link>
                    <div className="m-sqr-bar" onClick={() => this.props.rotateAndroid()}></div>
                </div>
            </React.Fragment>
        )
    }
}

export default BottomBar;
