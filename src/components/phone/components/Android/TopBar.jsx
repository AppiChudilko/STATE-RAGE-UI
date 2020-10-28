import React from 'react';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'TopBar.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        this.batteryCharge();
        this.network();
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.props.data.battery !== prevProp.data.battery) {
            this.batteryCharge(); // исправлено, нужно проверять
        }
        if (this.props.data.network !== prevProp.data.network) {
            this.network(); // исправлено, нужно проверять
        }
    }

    batteryCharge() {
        if (this.state.batteryTimeout) {
            return;
        }
        this.setState({batteryTimeout: true})
        switch (this.props.data.battery) {
            case 11:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.6007 7 10.1081V1.78378C7 1.29116 6.59126 0.891892 6.08696 0.891892H5.17391V0H1.82609V0.891892H0.913043C0.408739 0.891892 0 1.29116 0 1.78378V10.1081C0 10.6007 0.408739 11 0.913043 11Z'})
                break;
            case 10:
                this.setState({path_battery: 'M0 10.1081C0 10.6007 0.408739 11 0.913043 11H6.08696C6.59126 11 7 10.6007 7 10.1081V1.78378C7 1.44546 6.80721 1.15116 6.52307 1H0.476928C0.192793 1.15116 0 1.44546 0 1.78378V10.1081Z'})
                break;
            case 9:
                this.setState({path_battery: 'M0 10.1081C0 10.6007 0.408739 11 0.913043 11H6.08696C6.59126 11 7 10.6007 7 10.1081V2H0V10.1081Z'})
                break;
            case 8:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.5437 7 9.98069V3H0V9.98069C0 10.5437 0.408739 11 0.913043 11Z'})
                break;
            case 7:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.5437 7 9.98069V4H0V9.98069C0 10.5437 0.408739 11 0.913043 11Z'})
                break;
            case 6:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.5437 7 9.98069V5H0V9.98069C0 10.5437 0.408739 11 0.913043 11Z'})
                break;
            case 5:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.5437 7 9.98069V6H0V9.98069C0 10.5437 0.408739 11 0.913043 11Z'})
                break;
            case 4:
                this.setState({path_battery: 'M0.913043 11H6.08696C6.59126 11 7 10.5437 7 9.98069V7H0V9.98069C0 10.5437 0.408739 11 0.913043 11Z'})
                break;
            case 3:
                this.setState({path_battery: 'M6.08914 11H0.910856C0.407558 10.999 0 10.6572 0 10.2355V8H7V10.2355C7 10.6572 6.59244 10.999 6.08914 11Z'})
                break;
            case 2:
                this.setState({path_battery: 'M6.08882 11H0.911185C0.407735 10.9992 0 10.6573 0 10.2355V9H7V10.2355C7 10.6573 6.59226 10.9992 6.08882 11Z'})
                break;
            case 1:
                this.setState({path_battery: 'M0 10.2355C0 10.6573 0.407775 10.9992 0.911258 11H6.08874C6.59223 10.9992 7 10.6573 7 10.2355V10H0V10.2355Z'})
                break;
            case 0:
                this.setState({path_battery: ''})
                break;
            default:
                break;
        }
        this.setState({batteryTimeout: false})
    }

    network() {
        if (this.state.networkTimeout) {
            return;
        }
        this.setState({networkTimeout: true})
        switch (this.props.data.network) {
            case 5:
                this.setState({path_network: 'M11 0L0 11.0005L11 11V0Z'})
                break;
            case 4:
                this.setState({path_network: 'M9 2L0 11.0004L9 11V2Z'})
                break;
            case 3:
                this.setState({path_network: 'M7 4L0 11.0003L7 11V4Z'})
                break;
            case 2:
                this.setState({path_network: 'M5 6L0 11.0002L5 11V6Z'})
                break;
            case 1:
                this.setState({path_network: 'M3 8L0 11.0001L3 11V8Z'})
                break;
            case 0:
                this.setState({path_network: ''})
                break;
            default:
                break;
            // style={this.props.umenu ? `{{backgroundColor: '#000'}}` : ''}
            //style={{backgroundColor: '#000'}}
        }
        this.setState({networkTimeout: false})
    }

    render() {
        const style = {
            backgroundColor: this.props.data.color_bar
        }
        return (
            <React.Fragment>
                <div className="topbar-andr" style={style}>
                    <div className="right-topbar"></div>
                    <div className="left-topbar">
                        {this.props.data.wifi ?
                            <div className="elements-bar">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.99975 0C4.40371 0 1.99432 0.729527 0 1.97896L7.00516 11L14 1.97896C12.0057 0.729963 9.5958 0 6.99975 0Z"
                                              fill="white"/>
                                        <path opacity="0.302" fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.99365 0.00561523C4.39813 0.00561523 1.98828 0.707729 -0.00634766 1.90924L6.9977 11.0025L13.994 1.90924C11.9994 0.707729 9.58955 0.00561523 6.99365 0.00561523Z"
                                              fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="11" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            : null}
                        <div className="elements-bar">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path opacity="0.302" fillRule="evenodd" clipRule="evenodd"
                                          d="M11 0L0 11.0003L11 11V0Z" fill="white"/>
                                    <g clipPath="url(#clip1)">
                                        <path fillRule="evenodd" clipRule="evenodd" d={this.state.path_network}
                                              fill="white"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="11" height="11" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1">
                                        <rect width="11" height="11" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="elements-bar">
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.302" fillRule="evenodd" clipRule="evenodd"
                                      d="M6.08696 11H0.913043C0.408739 11 0 10.6007 0 10.1081V1.78378C0 1.29116 0.408739 0.891892 0.913043 0.891892H1.82609V0H5.17391V0.891892H6.08696C6.59126 0.891892 7 1.29116 7 1.78378V10.1081C7 10.6007 6.59126 11 6.08696 11Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d={this.state.path_battery} fill="white"/>
                            </svg>

                        </div>
                        <span className="battery-info">{this.props.data.time}</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopBar;
