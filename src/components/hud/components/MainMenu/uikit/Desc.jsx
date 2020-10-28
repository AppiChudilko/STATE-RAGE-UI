import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 300
    },
    container: {
        padding: '20px',
        borderRadius: '0px',
        marginTop: '10px',
        backgroundColor: '#000'
    }
};

export default function Desc(props) {
    try {
        styles.container.borderRadius = props.border + 'px';
        styles.container.backgroundColor = props.color;
        styles.header.fontFamily = props.font;
    }
    catch (e) {
        
    }
    return (
        <div style={styles.container}>
            <p className="header" style={styles.header} dangerouslySetInnerHTML={{__html: parseText(props.desc)}}></p>
        </div>
    )
}