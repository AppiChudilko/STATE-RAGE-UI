import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '4rem',
        fontWeight: 400,
        padding: '20px 20px',
        textAlign: 'center',
        minHeight: '65px'
    },
    headerDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 20px',
        background: '#000',
        fontFamily: 'RobotoLight',
        color: '#64B5F6',
        fontWeight: 400,
        alignItems: 'center',
        fontSize: '1.1rem'
    },
    headerDesc: {
        marginRight: 'auto',
        width: '80%',
        fontSize: '1.1rem'
    },
    headerDescCount: {
    },
    banner: {
        width: '100%',
        height: '120px',
        position: 'absolute',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: '1'
    }
}

export default function Header(props) {

    /*if (props.banner)
    {
        styles.header.backgroundImage = `url(${require('../img/banners/' + props.banner + '.png')})`;
        styles.header.backgroundPosition = 'center';
    }*/

    try {
        styles.banner.borderRadius = props.headerBorder + 'px ' + props.headerBorder + 'px 0 0';
        styles.headerDataContainer.backgroundColor = props.headerColor;
        styles.headerDataContainer.fontFamily = props.headerFont;
    }
    catch (e) {
        
    }

    return (
        <div style={{backgroundColor: props.headerColor, borderRadius: props.headerBorder + 'px ' + props.headerBorder + 'px 0 0'}}>
            <div style={{minHeight: props.banner ? '120px' : ''}}>
                {props.banner && (
                    <img src={`https://dednet.ru/client/images/banners/${props.banner}.png`} style={styles.banner} />
                )}
                <h1 className="header" style={styles.header}>{props.headerText}</h1>
            </div>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc} dangerouslySetInnerHTML={{__html: parseText(props.headerDesc)}}></div>
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}