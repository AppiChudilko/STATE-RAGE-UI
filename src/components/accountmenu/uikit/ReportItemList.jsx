import React from 'react'
import '../css/reports.css'

const ReportItemList = ({ type, number, time, active, index, text, setReportData, status }) => {
    return (
        <div className="accountmenu__content__reports__item__list">
            <div className="accountmenu__content__reports__item__list__header">
                <img
                    src={type === 0 ? 'https://dednet.ru/client/images/mmenu/all/icons/question_cloud.svg' : 'https://dednet.ru/client/images/mmenu/all/icons/report_icon.png'}
                    alt=""
                    className={type === 0 ? "accountmenu__content__reports__list__header__icon_ask" : "accountmenu__content__reports__list__header__icon_report"}    
                />
                <span className="accountmenu__content__reports__list__header__num">{`Запрос №${number}`}</span>
                <span className={status === 0 ? "accountmenu__content__reports__list__header__status_new" : "accountmenu__content__reports__list__header__status_clsd"}>{status === 0 ? "Открыт" : "Закрыт"}</span>
            </div>
            <div className="accountmenu__content__reports__item__list__content">
                <span className="accountmenu__content__reports__item__list__content__text">
                    {text}
                </span>
            </div>
            <div className="accountmenu__content__reports__item__list__footer">
                <span className="accountmenu__content__reports__item__list__time">{time}</span>
                <span className="accountmenu__content__reports__item__list__open" onClick={setReportData}>Написать</span>
            </div>
        </div>
    )
}

export default ReportItemList