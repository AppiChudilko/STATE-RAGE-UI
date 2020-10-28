import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Noty from 'noty';
import './css/theme-noty.css';
import "../node_modules/noty/lib/noty.css";
import "animate.css"

import EventManager from "./EventManager";

EventManager.addHandler('notify', value => {
    notify(value.type, value.layout, value.text, value.time)
});

Noty.setMaxVisible(3);

function notify(type, layout, message, time) {
    let types = ['information', 'error', 'success'];
    let layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
    message = `<div class="message">${message}</div>`;
    let ntf = new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: 'dednet',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'animated fadeInLeft',
            close: 'animated fadeOutLeft'
        }
    });
    ntf.show();
    /*ntf.onClose((id, type) => {

    });*/
}

setInterval(function () {
    try {
        mp.trigger('client:ui:checker'); // eslint-disable-line
    }
    catch (e) {
    }
}, 1000);

// notify(0, 1, 'Видимо произошла какая-то непредвиденная ошибка ', 5000)
// notify(1, 1, 'Видимо произошла какая-то непредвиденная ошибка', 3000)
// notify(2, 1, 'Видимо произошла какая-то непредвиденная ошибка', 20000)

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (document.getElementById('disableZoom') === undefined) {
    if (window.outerWidth > 1900)
        document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
    else
        document.getElementsByTagName('body')[0].style.zoom = 1;

    window.onresize = () => {
        if (window.outerWidth > 1900)
            document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
        else
            document.getElementsByTagName('body')[0].style.zoom = 1;
    };
}
else
    document.getElementsByTagName('body')[0].style.zoom = 1;
