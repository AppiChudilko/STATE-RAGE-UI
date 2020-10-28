import React from 'react'
import '../css/header.css'

const Header = ({ banner, title, subtitle }) => (
    <div>
        <img src={`https://dednet.ru/client/images/banners/${banner}.png`} className="tatoo__content__header__img" />
        <div className="tatoo__content__header">
                <span className="tatoo__content__header__title">
                    {title}
                </span>
                <span className="tatoo__content__header__subtitle">
                    {subtitle}
                </span>
        </div>
    </div>
)

export default Header