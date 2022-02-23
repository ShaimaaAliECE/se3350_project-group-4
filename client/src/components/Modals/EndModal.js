import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const EndModal = (props) => {
  // get values from props
  const { handleStart, title, body } = props;

  return (
    <div className="modal-overlay">
      <Animated
        animationIn="bounceInDown"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="modal-container">
          <div className="modal-title">
            <h2 className="title is-2 has-text-primary">{title}</h2>
          </div>
          <div className="modal-body ">
            {body}
          </div>
          
          <div className="modal-footer">
            <Link to="/ms/select">
              <button className="modal-btn button is-primary hvr-sweep-to-left">
                Select Another Level
              </button>
            </Link>
            <button
              className="modal-btn button is-primary hvr-pulse hvr-sweep-to-right"
              onClick={handleStart}
            >
              Begin Now!
            </button>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default EndModal;
