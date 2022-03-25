import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
const StartModal = (props) => {
  // get values from props
  const { handleStart, title, body, lowerLimit, upperLimit, boxCount } = props;

  return (
    <div className="modal-overlay">
      <Animated
        animationIn="bounceInUp"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="modal-container">
          <div className="modal-title">
            <h2 className="title is-2 has-text-primary">
              Welcome to Level {title}
            </h2>
          </div>
          <div className="modal-body ">
            <div>
              <strong className="has-text-primary">Level Description:</strong>
              <span className="has-text-light mt-3 ml-5">
                <ul>
                  <li>
                    A set of{" "}
                    <span className="has-text-primary">{boxCount}</span> numbers
                    are randomly generated out of the range (
                    <span className="has-text-primary">{lowerLimit}</span> -{" "}
                    <span className="has-text-primary">{upperLimit}</span>)
                  </li>
                  {body}
                </ul>
              </span>
            </div>
          </div>
          <p className="tag is-danger is-align-self-center hvr-buzz">
            Note: A timer will start when you press Start !
          </p>
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

export default StartModal;
