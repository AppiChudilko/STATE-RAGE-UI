import React from 'react';

class SliderArrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'SliderArrow.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="box-change">
                    <span className="box-title">{this.props.title}</span>
                    <div className="box-in-change">
                        <div className="arrow-change left-arrow"
                             onClick={() => this.props.clickLeftArrow(this.props.index)}></div>
                        <div
                            className="label-change color-white">{this.props.name_array[this.props.index_help] !== undefined ? this.props.name_array[this.props.index_help] : this.props.name_array + "%"}</div>
                        <div className="arrow-change right-arrow"
                             onClick={() => this.props.clickRightArrow(this.props.index)}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SliderArrow;
