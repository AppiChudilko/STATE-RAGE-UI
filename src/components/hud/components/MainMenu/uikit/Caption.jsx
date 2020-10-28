import React from 'react'
import Icon from './Icon'
import RightLabel from './RightLabel'
import parseText from '../functions/parseText'

const styles = {
    container: {
        display: 'flex',
        padding: '5px 20px',
        alignItems: 'center'
    },
    listitem: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.3rem',
        marginRight: 'auto',
    },
    icon: {
        fontSize: '1.5rem',
        cusor: 'pointer'
    }

}

export default class Caption extends React.Component {

    handleOnClick() {
        try {
            if (this.props.selectCurrent === this.props.id)
                mp.trigger('client:menuList:callBack:btn', this.props.data.menuName, this.props.data.id, JSON.stringify(this.props.data.data.params)); // eslint-disable-line
        }
        catch (e) {}
    }

    render() {

        try {
            styles.listitem.fontFamily = this.props.font;
        }
        catch (e) {}

        return (
            <div onClick={this.handleOnClick.bind(this)} style={styles.container}>
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
                <label style={styles.listitem}
                       dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.title)}}
                >
                </label>
                {this.props.data.data.rl ? <RightLabel font={this.props.font} text={this.props.data.data.rl} /> : <></>}
                {this.props.data.data.divider ? <Icon style={styles.icon} name="arrow_right" /> : <></>}
                {this.props.data.data.iconr ? <Icon style={styles.icon} name={this.props.data.data.iconr} /> : <></>}
            </div>
        );
    }
}