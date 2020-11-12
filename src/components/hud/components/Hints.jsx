import React from 'react';

class Hints extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            hints: [
                {key: 'O', text: 'Открыть телефон'},
                {key: 'i', text: 'Открыть инвентарь'},
                {key: '~', text: 'Предметы рядом'},
                {key: 'M', text: 'Главное меню'}
            ]
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="hud__hints">
                {this.state.hints.map((item, index) => (
                    <div className="hud__hints__element" key={`hud__hints__element-${index}`}>
                        <span className="hud__hints__element__key">
                            {item.key}
                        </span>
                        <span className="hud__hints__element__text">
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Hints
