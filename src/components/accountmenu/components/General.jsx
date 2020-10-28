import React from 'react'
import '../css/general.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import ProgressBar from '../uikit/ProgressBar'
import ProgressBarCircle from '../uikit/ProgressBarCircle'
import Card from '../uikit/Card'
import EventManager from "../../../EventManager";
import { ButtonBase } from '@material-ui/core'
import ButtonOver from '../uikit/ButtonOver'
import Button from '../uikit/Button'
import BigButton from '../uikit/BigButton'

const General = ({ listElements, accountData, setActivePage }) => {

    /*let listElements = [
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
        {title: 'Репутация', subtitle: 'идеальная'},
    ]

    let accountData = {
        nickname: "Andrey Knyazev",
        fraction: "LSPD",
        gender: "Мужской",
        age: "30",
        husband: "Name Name",
        hours: "300",
        lastlogin: "01.07.2020 12:23",
        created: "01.05.2020 11:00",
        friends: 100,
        maxFriends: 200,
        death: 32,
        maxdeath: 100,
        kills: 100,
        maxkills: 500,
        status: "Гражданин",
        statusDate: "_________",
        pocketmoney: "100000000",
        cardmoney: "30000000",
        medDate: "01.01.2020",
        medPercent: "100"
    }*/

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__cards__nickname">
                    <img className="accountmenu__cards__avatar" src="https://dednet.ru/client/images/mmenu/all/person.png" alt="" />
                    <div className="wrapper__progress">
                        <span className="accountmenu__cards__nickname__text" style={{fontSize: `2.6rem`}}>
                            {accountData.nickname}
                        </span>
                    </div>
                </div>
                <div className="accountmenu__cards__fraction">
                    <span className="accountmenu__cards__fraction__name">
                        Организация:
                    </span>
                    <span className="accountmenu__cards__fraction__text">
                        {accountData.fraction}
                    </span>
                </div>
                <LineData
                    leftinfo="Пол:"
                    rightinfo={accountData.gender}
                />
                <LineData
                    leftinfo="Дата рождения:"
                    rightinfo={`${accountData.age}`}
                />
                <LineData
                    leftinfo="Супруг(а):"
                    rightinfo={accountData.husband}
                />
                <div className="accountmenu__cards__stats">
                    <StatContainer
                        title="Выносливость"
                        value={accountData.friends}
                        maxvalue={accountData.maxFriends}
                    />
                    <StatContainer
                        title="Сила"
                        value={accountData.death}
                        maxvalue={accountData.maxdeath}
                    />
                    <StatContainer
                        title="Стрельба"
                        value={accountData.kills}
                        maxvalue={accountData.maxkills}
                    />
                </div>
                <div className="accountmenu__hr" />
                <div className="accountmenu__cards__btnreports">
                    <div style={{width: '45%'}}>
                        <BigButton text="Жалоба" type={1} onPress={() => setActivePage('accmenu-reports', 1)} />
                    </div>
                    <div style={{width: '45%'}}>
                        <BigButton text="Вопрос" type={0} onPress={() => setActivePage('accmenu-reports', 0)} />
                    </div>
                </div>
                <div className="accountmenu__cards__logindata">
                    <InfoBlock
                        title="Часов в игре"
                        subtitle={accountData.hours}
                    />
                    <InfoBlock
                        title="Последний вход"
                        subtitle={accountData.lastlogin}
                    />
                    <InfoBlock
                        title="Дата создания"
                        subtitle={accountData.created}
                    />
                </div>
            </div>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__content__cards__status">
                    <div className="accountmenu__content__cards__status__mcircle" />
                    <ProgressBarCircle
                        toptext="Статус игрока"
                        midtext={accountData.status}
                        btmtext={`${accountData.statusDate}`}
                    />
                    <div className="accountmenu__content__cards__status__mcircle" />
                </div>
                <div className="accountmenu__hr" />
                <div className="accountmenu__content__cards__finance">
                    <span className="accountmenu__content__cards__title">
                        Финансы
                    </span>
                    <div className="accountmenu__content__cards__finance__container">
                        <Card 
                            icon="pair-of-bills"
                            title="Наличные"
                            subtitle={`$ ${accountData.pocketmoney.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                        />
                        <Card 
                            icon="black-and-white-credit-cards"
                            title="На счету"
                            subtitle={`$ ${accountData.cardmoney.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                        />
                    </div>
                </div>
                <div className="accountmenu__hr" />
                <div className="accountmenu__content__cards__medicine__container">
                    <div className="accountmenu__content__cards__medicine">
                        <span className="accountmenu__content__cards__medicine__name">SAN ANDREAS MEDICIAL CENTER</span>
                        <div className="accountmenu__content__cards__medicine__status__container">
                            <span className="accountmenu__content__cards__medicine__status">СТАТУС</span>
                            <div className="accountmenu__content__cards__medicine__status__container__date">
                                <span className="accountmenu__content__cards__medicine__status__container__date__text">
                                    {`до ${accountData.medDate}`}
                                </span>
                                <ProgressBar
                                    value={accountData.medActive}
                                    maxvalue={100}
                                />
                            </div>
                        </div>
                    <span className="accountmenu__content__cards__medicine__info">{`ваша медицинская страховка ${accountData.medPercent}`}</span>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__item">
                <span className="accountmenu__content__cards__title" style={{paddingLeft: '3.5rem', paddingRight: '3.5rem', marginTop: '5%', marginBottom: '5%'}}>
                    Статистика
                </span>
                <div className="accountmenu__list">
                {listElements.map((item, index) => (
                    <div className="accountmenu__content__cards__item__list" key={index.toString()}>
                        <span className="accountmenu__content__cards__item__list__title">
                            {item.title}
                        </span>
                        <span className="accountmenu__content__cards__item__list__subtitle">
                            {item.subtitle}
                        </span>
                    </div>
                ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default General