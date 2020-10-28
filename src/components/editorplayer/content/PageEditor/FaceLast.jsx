import React from 'react';
import {Link} from "react-router-dom";
import SliderEditor from './Elements/SliderEditor';

class FaceLast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'FaceLast.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="slider-editor-main">
                    <input type="radio" name="change-radio-slider" id="change-radio-slider1"
                           className="range-slider-ch"/>
                    <label htmlFor="change-radio-slider1">
                        <div className="slider-change-radio margin-right-perf"></div>
                    </label>
                    <input type="radio" name="change-radio-slider" id="change-radio-slider2"
                           className="range-slider-ch"/>
                    <label htmlFor="change-radio-slider2">
                        <div className="slider-change-radio margin-right-perf"></div>
                    </label>
                    <input type="radio" name="change-radio-slider" id="change-radio-slider3" className="range-slider-ch"
                           defaultChecked/>
                    <label htmlFor="change-radio-slider3">
                        <div className="slider-change-radio"></div>
                    </label>
                </div>
                <div className="header-title-editor margin-for-editor">Внешность</div>
                {this.props.input_editor_face_last.map((e, index) => {
                    let i = "input_editor_face_last" + index;
                    return (
                        <React.Fragment key={i}>
                            <SliderEditor
                                index={index}
                                index_help={e.index_help}
                                title={e.title}
                                name_array={e.index_help}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                            />
                        </React.Fragment>
                    )
                })}
                <div className="editor-circl-change">
                    <div className="circle-change"></div>
                    <div className="circle-change"></div>
                    <div className="circle-change circle-blue"></div>
                </div>
                <div className="last-button-menu">
                    <Link to="/editor/editor-character/face-second">
                        <div className="box-last-btn">Назад</div>
                    </Link>
                    <div className="box-last-btn" onClick={() => this.props.reset(3)}>Сброс</div>
                </div>
                <Link to="/choicerole" onClick={() => this.props.saveCustomization()}>
                    <div className="next-button-menu">
                        <div className="box-next-btn">Сохранить</div>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}

export default FaceLast;
