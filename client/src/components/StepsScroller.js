import React from "react";
import { Animated } from "react-animated-css";

// component for showing steps
const StepsScroller = (props) => {
  const {
    lineOne,
    lineTwo,
    lineThree,
    handleReset,
    handleNextStep,
    handlePrevStep,
  } = props;

  return (
    <div>
      <div className="steps-wrapper">
        {lineOne ? (
          <div className="steps-header has-text-primary">Steps:</div>
        ) : (
          <span></span>
        )}

        <div className="steps-list">
          {lineOne ? <li className="step1">{lineOne}</li> : <span></span>}
          {lineTwo ? <li className="step2">{lineTwo}</li> : <span></span>}
          {lineThree ? <li className="step3">{lineThree}</li> : <span></span>}
        </div>
      </div>
      {/* buttons */}
      <div className="control-btns field has-addons">
        <div className="control">
          <button
            className="button is-primary is-large is-outlined"
            onClick={handlePrevStep}
          >
            <span className="icon is-small">
              <i className="fas fa-angle-left"></i>
            </span>
            <span>Prev</span>
          </button>
        </div>
        <div className="control">
          <button
            className="button is-primary is-large is-outlined"
            onClick={handleReset}
          >
            <span className="icon is-small">
              <i className="fa fa-refresh"></i>
            </span>
            <span>Reset</span>
          </button>
        </div>
        <div className="control">
          <button
            className="button is-primary is-large is-outlined"
            onClick={handleNextStep}
          >
            <span>Next</span>
            <span className="icon is-small">
              <i className="fas fa-angle-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsScroller;
