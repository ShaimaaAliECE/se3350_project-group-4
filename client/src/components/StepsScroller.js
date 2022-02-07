import React from "react";
import 'animate.css';

// component for showing steps
class StepsScroller extends React.Component {
  render() {
    return (
      <div className="steps-wrapper animate__bounce">
        <div className="steps-header has-text-primary">Steps:</div>
        <div className="steps-list">
          <li className="step1 animate__bounce">{this.props.lineOne}</li>
          <li className="step2">{this.props.lineTwo}</li>
          <li className="step3">{this.props.lineThree}</li>
        </div>
      </div>
    );
  }
}

export default StepsScroller;
