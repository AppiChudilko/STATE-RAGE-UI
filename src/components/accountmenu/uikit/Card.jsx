import React from 'react'
import '../css/general.css'

const Card = ({ icon, title, subtitle }) => {
    return (
        <div className="accountmenu__content__cards__finance__card">
            <img src={`https://dednet.ru/client/images/mmenu/all/icons/${icon}.svg`} alt="" className="accountmenu__card__icon" />
            <span className="accountmenu__content__cards__finance__card__title">
                {title}
            </span>
            <span className="accountmenu__content__cards__finance__card__subtitle">
                {subtitle}
            </span>
        </div>
    )
}

export default Card