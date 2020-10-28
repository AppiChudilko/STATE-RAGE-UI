import React from 'react';

import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

class ProfileContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'ProfileContact.jsx', error, errorInfo); // eslint-disable-line
    }

    deleteContact(contact) {
        // Вы точно хотите навсегда удплить выбранный контакт?
        //this.props.openModal("Вы уверены, что хотите удалить?", "",['Нет', 'Да'], "");
        try {
            mp.trigger('client:phone:deleteContact', JSON.stringify(contact)); // eslint-disable-line
        } catch (e) {
        }
        this.props.deleteContact(contact)
    }

    render() {
        return (
            <React.Fragment>
                <div className="u-profilecontact">
                    <div className="box-img-pp">
                        <figure>
                            <img
                                src={this.props.data.selected_contact.img !== undefined && this.props.data.selected_contact.img !== '' ?
                                    this.props.data.selected_contact.img : 'https://a.rsg.sc//n/socialclub'} alt=""
                                className="p-box-img-player"/>
                            <div className="p-nameplayer-p">{this.props.data.selected_contact.name}</div>
                        </figure>
                    </div>
                    <div className="p-topbar">
                        <div className="posit-icon-topbar">
                            <i className="material-icons favorite-img-style"
                               onClick={() => this.props.favoriteContact(this.props.data.selected_contact)}>{this.props.data.selected_contact.isFavorite ? "star" : "star_border"}</i>
                            <MaterialIcon icon="delete_forever" size={19} color="#fff"
                                          onClick={() => this.deleteContact(this.props.data.selected_contact)}/>
                            <div className="position-btn-icon">
                                <IconButton aria-label="create" onClick={() => this.props.editContact()}>
                                    <CreateIcon fontSize="small"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="p-info-player">
                        <div className="p-box-mob_email">
                            {this.props.data.selected_contact.numbers.map((e, i) => {
                                let index = `number${i}`
                                return (
                                    <div className="number" key={index}>
                                        <MaterialIcon icon="phone" size={19} color="#607D8B"/>
                                        <div className="p-box-num">
                                            <div className="p-num-num-p">{e}</div>
                                            <div className="p-num-num-p-info">Мобильный</div>
                                        </div>
                                        <MaterialIcon icon="message" size={19} color="#607D8B"
                                                      onClick={() => this.props.selectChat(e)}/>
                                    </div>
                                )
                            })}
                            {this.props.data.selected_contact.mail !== undefined ?
                                <div className="number">
                                    <MaterialIcon icon="email" size={19} color="#607D8B"/>
                                    <div className="p-box-num">
                                        <div className="p-num-num-p">{this.props.data.selected_contact.mail}</div>
                                        <div className="p-num-num-p-info">Почта</div>
                                    </div>
                                    {/* <MaterialIcon icon="message" size={19} color="#607D8B" /> */}
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProfileContact;
