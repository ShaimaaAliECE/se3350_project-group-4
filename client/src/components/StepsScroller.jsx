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
    enablePrev,
    enableReset,
    enableNext,
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
      <Animated
        animationIn="bounceInDown"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="control-btns field has-addons">
          <div className="control">
            {enablePrev ? (
              <button
                className="button is-primary is-large p-5 is-outlined"
                onClick={handlePrevStep}
              >
                <span className="icon is-small">
                  <i className="fas fa-angle-left"></i>
                </span>
                <span>Prev</span>
              </button>
            ) : null}
          </div>
          <div className="control">
            {enableReset ? (
              <button
                className="button is-primary is-large p-5 is-outlined"
                onClick={handleReset}
              >
                <span className="icon is-small">
                  <i className="fa fa-refresh"></i>
                </span>
                <span>Reset</span>
              </button>
            ) : null}
          </div>
          <div className="control">
            {enableNext ? (
              <button
                className="button is-primary is-large p-5 is-outlined"
                onClick={handleNextStep}
              >
                <span>Next</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-right"></i>
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default StepsScroller;
