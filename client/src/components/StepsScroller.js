import React from "react";

// component for showing steps
const StepsScroller = (props) => {
  const { lineOne, lineTwo, lineThree, handleReset, handleNextStep } = props;

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

      <div className="control-btns field has-addons">
        <p className="control">
          <button className="button is-primary is-large is-outlined">
            <span className="icon is-small">
              <i class="fas fa-angle-left"></i>
            </span>
            <span>Prev</span>
          </button>
        </p>
        <p className="control">
          <button
            className="button is-primary is-large is-outlined"
            onClick={handleReset}
          >
            <span className="icon is-small">
              <i class="fa fa-refresh"></i>
            </span>
            <span>Reset</span>
          </button>
        </p>
        <p className="control">
          <button
            className="button is-primary is-large is-outlined"
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
