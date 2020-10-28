import React from 'react'
import '../css/car.css'
import FlatButton from "../../gunshop/uikit/FlatButton";

const Car = ({ name, price, btnbg, sale, params }) => {
    return (
        <div className="carrent__content__list__item">
            <div className="carrent__content__list__img__container">
                <img alt="" src={`https://dednet.ru/client/images/carssm/${name}_1.jpg`} className="carrent__content__list__img__item" />
                <div className="carrent__content__list__img__container__data">
                    <span style={{backgroundColor: btnbg}} className="carrent__content__list__item__name">{name}</span>
                    {sale > 0 && (<span className="carrent__content__list__item__sale">{`-${sale}%`}</span>)}
                </div>
            </div>
            <div className="carrent__content__list__item__info">
                <span className="carrent__content__list__item__info__price">
                    {`${price}`}
                </span>
                <div className="carrent__content__list__item__info__rent">
                    <span onClick={() => {
                        try {
                            mp.trigger('client:carRent:buyCard', name, JSON.stringify(params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} className="carrent__content__list__item__info__rentbtn">
                        По карте
                    </span>
                    <span onClick={() => {
                        try {
                            mp.trigger('client:carRent:buyCash', name, JSON.stringify(params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} className="carrent__content__list__item__info__rentbtn">
                        Наличные
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Car