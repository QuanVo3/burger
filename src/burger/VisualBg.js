import React, { Component } from 'react';

class VisualBg extends Component {
    render() {
        const{img} = this.props;
        return (
            <div className = "row">
                <div className="imgCover">
                <img src={img} alt="" className = "img" />
                </div>
            </div>
        );
    }
}

export default VisualBg;