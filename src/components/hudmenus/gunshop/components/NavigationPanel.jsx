import React from 'react'
import '../css/navpanel.css'

const NavigationPanel = ({ bgcolor, catalog, selected, setHide, setActive, banner, activecolor }) => {

    

    return (
        <div className="hmenu__gunshop__navpanel" style={{backgroundColor: bgcolor, backgroundImage: `url(https://dednet.ru/client/images/banners/${banner}.png)`}}>
            <div className="hmenu__gunshop__navpanel__list">
                {catalog.map((item, index) => (
                    <span
                        key={`hmenu__gunshop__navpanel-${index}`}
                        className={selected === index ? "hmenu__gunshop__navpanel__list__item_active" : "hmenu__gunshop__navpanel__list__item"}
                        onClick={() => setActive(index)}
                        style={{backgroundColor: selected === index ? activecolor : 'transparent'}}
                    >
                        {item.title}
                    </span>
                ))}
            </div>
            <span className="hmenu__gunshop__navpanel__exitbtn" onClick={setHide}>
                Закрыть
            </span>
        </div>
    )
}

export default NavigationPanel