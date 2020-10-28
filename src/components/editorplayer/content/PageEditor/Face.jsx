import React from 'react';
import InputRange from 'react-input-range';
import {Link} from "react-router-dom";

class Face extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Face.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="slider-editor-main">
                    <input type="radio" name="change-radio-slider" id="change-radio-slider1" className="range-slider-ch"
                           defaultChecked/>
                    <label htmlFor="change-radio-slider1">
                        <div className="slider-change-radio margin-right-perf"></div>
                    </label>
                    <input type="radio" name="change-radio-slider" id="change-radio-slider2"
                           className="range-slider-ch"/>
                    <label htmlFor="change-radio-slider2">
                        <div className="slider-change-radio margin-right-perf"></div>
                    </label>
                    <input type="radio" name="change-radio-slider" id="change-radio-slider3"
                           className="range-slider-ch"/>
                    <label htmlFor="change-radio-slider3">
                        <div className="slider-change-radio"></div>
                    </label>
                </div>
                <div className="header-title-editor">Лицо</div>
                <div className="block-editor-range">
                    <div className="range-editor-block-big">
                        {this.props.input_editor_face.map((e, index) => {
                            let i = "input_editor_face" + index;
                            return (
                                <React.Fragment key={i}>
                                    <span className="range-text">{e.name}</span>
                                    <div className="range-slider-editor-big">
                                        <InputRange
                                            maxValue={100}
                                            minValue={-100}
                                            value={e.value}
                                            onChange={value => {
                                                this.setState({...this.props.input_editor_face[index].value = value});
                                                this.props.setCustomization(value);
                                            }}
                                            onChangeComplete={value => console.log(value)}
                                        />
                                        <div className="range-label">{e.value}</div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div className="editor-circl-change">
                    <div className="circle-change"></div>
                    <div className="circle-change"></div>
                    <div className="circle-change circle-blue"></div>
                </div>
                <div className="last-button-menu">
                    <Link to="/editor/family-character">
                        <div className="box-last-btn">Назад</div>
                    </Link>
                    <div className="box-last-btn" onClick={() => this.props.reset(1)}>Сброс</div>
                </div>
                <Link to="/editor/editor-character/face-second">
                    <div className="next-button-menu">
                        <div className="box-next-btn">Далее</div>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}

export default Face;
