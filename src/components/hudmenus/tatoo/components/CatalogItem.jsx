import React from 'react'
import '../css/item.css'

const CatalogItem = ({ name, setSelected, sale, desc, selected, index }) => (
    <div className="tatoo__content__list__item" onClick={setSelected}>
        <span className="tatoo__content__list__item__name" style={{color: selected === index ? '#70cfff' : ''}}>
            {name}
            {desc && (
                <span className="tatoo__content__list__item__desc">
                <br />{`${desc}`}
                </span>
            )}
        </span>
        {sale > 0 && (
            <span className="tatoo__content__list__item__sale">
                {`-${sale}%`}
            </span>
        )}
    </div>
)

export default CatalogItem