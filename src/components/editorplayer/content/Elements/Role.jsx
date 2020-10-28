import React from 'react';

class Role extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: 'player_role'
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Role.jsx', error, errorInfo); // eslint-disable-line
    }

    selectChar(index) {
        mp.trigger('client:events:custom:choiceRole', index) // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="change-create-player">
                    <div className="border-top"></div>
                    <div className="info-player role-custom">
                        <div className={this.state.img}><div className="text-role-recomed">{this.props.text}</div></div>
                        <div className="name-player-info">{this.props.name}</div>
                        <div className="info-role">
                            <span className="title-info-role">Информация</span>
                            <span>{this.props.text_info}</span>
                        </div>
                        <div className="create-btn" onClick={() => this.selectChar(this.props.index)}>Выбрать</div>
                    </div>
                    <div className="border-bottom"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Role;
