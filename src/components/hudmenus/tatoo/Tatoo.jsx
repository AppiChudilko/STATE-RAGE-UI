import React from 'react'
import './css/main.css'
import Header from './components/Header';
import CatalogItem from './components/CatalogItem'
import FlatButton from '../gunshop/uikit/FlatButton'
import EventManager from "../../../EventManager";

class Tatoo extends React.Component {
    constructor(props) {
        super(props)
        this.itemRefs = {}
        this.state = {
            show: false,
            bgcolor: '#252525',
            banner: 'bs_hair',
            title: 'Добро пожаловать',
            subTitle: '',
            type: 1,
            selected: -1,
            items: [
                {name: 'Прическа для топ типов ахуеть да', desc: 'Термостойкость: 20*', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
                {name: 'Прическа', desc: '', price: 111, sale: 11},
                {name: 'Борода', desc: '', price: 1123, sale: 0},
            ],
            itemsBack: [
                {name: 'Прическа', desc: '', price: 111, sale: 0},
                {name: 'Борода123123', desc: '', price: 1123, sale: 0},
            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('tattooshop', value => {
            if (value.type === 'show') {
                this.setState({show: true})
                this.itemRefs[0].focus()
            } else if (value.type === 'hide') {
                this.setState({show: false})

                this.setState({
                    selected: -1,
                })
            } else if (value.type === 'updateItems') {
                try {
                    this.setState({show: true})
                    this.setState({selected: value.selected})
                    this.setState({banner: value.banner})
                    this.setState({bgcolor: value.bgColor})
                    this.setState({items: value.items})
                    this.setState({title: value.title})
                    this.setState({subTitle: value.subTitle})
                    this.setState({type: value.t})

                    if (value.type === 0)
                        this.setState({itemsBack: value.items})
                    this.itemRefs[0].focus()
                }
                catch (e) {

                }
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('tattooshop');
    }

    setSelected = (value) => {
        this.setState({
            selected: value
        })

        this.sendEvent(value);
    }

    sendEvent = (value) => {
        try {
            mp.trigger('client:shopMenu:changeSelect2', JSON.stringify(this.state.items[value].params)); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    backBtn = () => {
        this.setState({
            type: 0,
            selected: -1,
            items: this.state.itemsBack,
        })

    }

    closeBtn = () => {
        this.setState({
            show: false,
            selected: -1,
        })

        try {
            mp.trigger('client:shopMenu:hideLeft'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    handleWheel = (e) => {

    }

    handleKeyDown = (e) => {
        if([13, 38, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }

        if (e.keyCode === 13) {
            this.setSelected(this.state.selected);
        }
        else if (e.keyCode === 38) {
            if (this.state.selected != 0 || this.state.selected === -1) {
                this.setState((state) => (
                    {selected: state.selected - 1}
                ))
                this.scrollMenu('up')
                this.sendEvent(this.state.selected - 1);
            } else {
                this.setState((state) => (
                    {selected: state.items.length - 1}
                ))
                this.itemRefs[this.state.items.length - 1].focus()
                this.sendEvent(this.state.items.length - 1);
            }
        }
        else if (e.keyCode === 40) {
            if (this.state.selected != this.state.items.length - 1 || this.state.selected === -1) {
                this.setState((state) => (
                    {selected: state.selected + 1}
                ))
                this.scrollMenu('down')
                this.sendEvent(this.state.selected + 1);
            } else {
                this.setState((state) => (
                    {selected: 0}
                ))
                this.itemRefs[0].focus()
                this.sendEvent(0);
            }
        }
    }

    scrollMenu(type) {
        if ((this.state.selected === this.state.items.length) && (type === 'up')) {
            setTimeout(
                function() {
                    this.itemRefs[this.state.items.length - 2].focus()
                }
                    .bind(this),
                120
            )
            return null
        }

        if ((this.state.selected === 0) && (type === 'down')) {
            setTimeout(
                function() {
                    this.itemRefs[1].focus()
                }
                    .bind(this),
                120
            )
            return null
        }

        if (type === 'up') {
            const selected = this.state.selected - 1
            setTimeout(
                function() {
                    this.itemRefs[selected].focus()
                }
                    .bind(this),
                120
            )
        }
        if (type === 'down') {
            const selected = this.state.selected + 1
            setTimeout(
                function() {
                    this.itemRefs[selected].focus()
                }
                    .bind(this),
                120
            )
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="tatoo__container" onWheel={(e) => this.handleWheel(e)} tabIndex="1" onKeyDown={(e) => this.handleKeyDown(e)}>
                <div className="tatoo__content" style={{backgroundColor: this.state.bgcolor}}>
                    <Header
                        banner={this.state.banner}
                        title={this.state.title}
                        subtitle={this.state.subTitle}
                    />
                    <div className="tatoo__content__list">
                        {this.state.items.map((item, index) => (
                            <div key={`tatoo__content__list-container-${index}`} ref={el => (this.itemRefs[index] = el)} tabIndex="-1" style={{outline: 'none'}}>
                                <CatalogItem
                                    key={`tatoo__content__list-${index}`}
                                    name={item.name}
                                    desc={item.desc}
                                    sale={item.sale}
                                    setSelected={() => this.setSelected(index)}
                                    selected={this.state.selected}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                    {/*(this.state.type === 1) && (
                        <div className="tatoo__content__exitbtn__container">
                        <span className="tatoo__content__exitbtn" onClick={() => this.backBtn()}>
                            Назад
                        </span>
                        </div>
                    )*/}
                    {/*(this.state.type === 0) && (
                        <div className="tatoo__content__exitbtn__container">
                        <span className="tatoo__content__exitbtn" onClick={() => this.closeBtn()}>
                            Закрыть
                        </span>
                        </div>
                    )*/}
                    <div className="tatoo__content__exitbtn__container">
                        <span className="tatoo__content__exitbtn" onClick={() => this.closeBtn()}>
                            Закрыть
                        </span>
                    </div>
                </div>
                {(this.state.type === 1 && this.state.selected !== -1) && (
                <div className="tatoo__payment">
                    <span className="tatoo__payment__price">
                        {`Цена: ${this.state.items[this.state.selected].price}`}
                    </span>
                    <FlatButton text="Оплатить наличкой" onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCash2', JSON.stringify(this.state.items[this.state.selected].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }}  btncolor="#252525" customStyle={{paddingLeft: '1rem', paddingRight: '1rem', border: `1px solid #fff`}} />
                    <FlatButton text="Оплатить картой" onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCard2', JSON.stringify(this.state.items[this.state.selected].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }}  btncolor="#252525" customStyle={{paddingLeft: '1rem', paddingRight: '1rem', border: `1px solid #fff`}} />
                </div>
                )}
            </div>
        )
    }
}

export default Tatoo