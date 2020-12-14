import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'Century Gothic',
        color: '#fff',
        fontSize: '1.1rem',
    },
    container: {
        width: '420px'
    }
};

export default function Desc(props) {
    /*try {
        styles.container.borderRadius = props.border + 'px';
        styles.container.backgroundColor = props.color;
        styles.header.fontFamily = props.font;
    }
    catch (e) {
        
    }*/
    return (
        <div className="menu-box-footer" style={styles.container}>
            <p className="header" style={styles.header} dangerouslySetInnerHTML={{__html: parseText(props.desc)}}></p>
        </div>
    )
}