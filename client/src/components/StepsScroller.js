import React from "react";

// component for showing steps
const StepsScroller = (props) => {
  const { lineOne, lineTwo, lineThree, handleReset, handleNextStep } = props;
  return (
    <div>
      <div className="steps-wrapper">
        <div className="steps-header has-text-primary">Steps:</div>
        <div className="steps-list">
          <li className="step1 ">{lineOne}</li>
          <li className="step2">{lineTwo}</li>
          <li className="step3">{lineThree}</li>
        </div>
      </div>

      <div className="control-btns field has-addons">
          <p className="control">
            <button className="button is-primary is-large">
              <span className="icon is-small">
                <i class="fas fa-angle-left"></i>
              </span>
              <span>Prev</span>
            </button>
          </p>
          <p className="control">
            <button className="button is-large" onClick={handleReset}>
              <span className="icon is-small">
                <i class="fa fa-refresh"></i>
              </span>
              <span>Reset</span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-primary is-large"
              onClick={handleNextStep}
            >
              <span>Next</span>
              <span className="icon is-small">
                <i class="fas fa-angle-right"></i>
              </span>
            </button>
          </p>
        </div>
    </div>
  );
};

export default StepsScroller;
