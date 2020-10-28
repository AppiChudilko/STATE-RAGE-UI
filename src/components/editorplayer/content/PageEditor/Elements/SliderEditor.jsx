import React from 'react';

class SliderEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'SliderEditor.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="box-change otstup-box">
                    <span className="box-editor-title">{this.props.title}</span>
                    <div className="box-in-change editor-box-style">
                        <div className="arrow-change left-arrow"
                             onClick={() => this.props.clickLeftArrow(this.props.index)}></div>
                        <div
                            className="label-change color-white">{this.props.name_array[this.props.index_help] !== undefined ? this.props.name_array[this.props.index_help] : this.props.name_array}</div>
                        <div className="arrow-change right-arrow"
                             onClick={() => this.props.clickRightArrow(this.props.index)}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SliderEditor;
