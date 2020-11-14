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
        fontFamily: 'Century Gothic',
        color: '#fff',
        fontWeight: 400,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
    },
    headerDesc: {
        fontSize: '1rem'
    },
    headerDescCount: {
        marginLeft: '1.5rem'
    },
    banner: {
        width: '100%',
        height: '120px',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: '1',
        borderRadius: '10px'
    }
}

export default function Header(props) {

    /*if (props.banner)
    {
        styles.header.backgroundImage = `url(${require('../img/banners/' + props.banner + '.png')})`;
        styles.header.backgroundPosition = 'center';
    }*/


    return (
        <div>
            <div style={{minHeight: props.banner ? '120px' : ''}}>
                {props.banner && (
                    <img src={`https://dednet.ru/client/images/banners/${props.banner}.png`} style={styles.banner} />
                )}
            </div>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc} dangerouslySetInnerHTML={{__html: parseText(props.headerDesc)}} />
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}