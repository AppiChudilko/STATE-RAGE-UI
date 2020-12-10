import React from 'react'
import '../css/general.css'
import IconCard from '../img/card.svg'
import IconWallet from '../img/wallet-alt.svg'

const Card = ({ icon, title, subtitle }) => {
    return (
        <div className="accountmenu__content__cards__finance__card">
            <img src={icon === 'card' ? IconCard : IconWallet} alt="" className="accountmenu__card__icon" />
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