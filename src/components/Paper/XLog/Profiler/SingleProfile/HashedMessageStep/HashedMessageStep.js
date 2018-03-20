import React, {Component} from 'react';
import './HashedMessageStep.css';
import {getDate, zeroPadding} from '../../../../../../common/common';
import StepGeneral from "../StepGeneral/StepGeneral";

class HashedMessageStep extends Component {
    render() {
        return (
            <div className="step hashed-message">
                {this.props.row.step.time > -1 &&
                    <StepGeneral startTime={this.props.startTime} row={this.props.row} elapsed={this.props.row.step.time} type="MSG"/>
                }
                <div className="message-content">{this.props.row.step.time < 0 &&<div className="tag"><span className="type-tag">MSG</span></div>}<div><span>{this.props.row.mainValue}</span></div></div>
            </div>)
    }
}

export default HashedMessageStep;