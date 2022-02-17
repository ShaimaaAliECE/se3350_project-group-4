import React from "react";
import { Link } from "react-router-dom";
const Modal = (props) => {
  // get values from props
  const { handleStart, title, text } = props;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-title">
          <h2 className="title is-2 has-text-primary">Welcome To {title}</h2>
        </div>
        <div className="modal-body ">
          <p className="has-text-light">
            <strong className="has-text-primary">Level Description:</strong> {text}
          </p>
        </div>
        <div className="modal-footer">
          <Link to="/select">
            <button className="modal-btn button is-primary">Select Another Level</button>
          </Link>
          <button className="modal-btn button is-primary" onClick={handleStart}>
            Start {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
