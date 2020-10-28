import React from 'react'
import '../css/stats.css'

const FlatButton = ({ text, isHide, onPress, btncolor, customStyle }) => {
    return (
        <span onClick={onPress} className={isHide ? 'hmenu__gunshop__hide' : 'hmenu__gunshop__stats__flatbtn'} style={customStyle ? customStyle : {border: `1px solid ${btncolor}`}}>
            {text}
        </span>
    )
}

export default FlatButton