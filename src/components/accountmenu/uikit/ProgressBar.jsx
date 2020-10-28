import React from 'react'
import '../css/general.css'

const ProgressBar = ({  value, maxvalue }) => {
    return (
        <React.Fragment>
        <div
            className="accountmenu__cards__stats__progressbar"
            //style={{width: `${maxvalue / (value / 100)}%`}}
        >
            <div className="wrapper__progress">
                <div style={{
                    width: `${0.07 * (value / (maxvalue / 100))}rem`,
                    background: `linear-gradient(to left, #70cfff, #43b2ea)`,
                    height: '0.5rem',
                    position: 'absolute'
                }}/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default ProgressBar