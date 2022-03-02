import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { Animated } from "react-animated-css";
import { toast } from "react-toastify";

function IdleTimerContainer(props) {
  // 300,000 milliseconds = 5 minutes
  const inactiveTimer = 300000;
  // 10,000 milliseconds = 10 seconds
  const modalTimer = 10000;
  // controls the state of the inactive modal
  const [showIdleModal, setIdleModal] = useState(false);
  // timer refs
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  // execute when user has been idle for more
  const onIdle = () => {
    setIdleModal(true);
    sessionTimeoutRef.current = setTimeout(signOut, modalTimer);
  };

  // log out user ans redirect back to login page
  const signOut = () => {
    clearTimeout(sessionTimeoutRef.current);
    global.auth.logout();
    window.location.reload(false);
    toast.error("You are now Logged out");
  };

  // keep user active
  const keepActive = () => {
    setIdleModal(false);
    clearTimeout(sessionTimeoutRef.current);
    toast.success("You are now active again");
  };

  return (
    <div>
      <Modal isOpen={showIdleModal} className="modal-overlay">
        <Animated animationIn="tada" animationOut="bounceOut" isVisible={true}>
          <div className="modal-container">
            <div className="modal-title">
              <h2 className="title is-3 has-text-primary">
                Hello? Are you still there?
              </h2>
            </div>
            <div className="modal-body">
              <div className="has-text-centered">
                <strong className="is-4 title has-text-primary">
                  You've been idle for 5 minutes.
                </strong>
                <p className="has-text-light mt-4">
                  {" "}
                  Click 'Logout Now' to return to the Home page.
                </p>
                <p className="has-text-light"> OR </p>
                <p className="has-text-light">
                  {" "}
                  Click 'Keep Me Active' to return to current page.
                </p>
              </div>
            </div>
            <p className="tag is-danger is-align-self-center hvr-grow">
              You will be logged automatically after 10 seconds!
            </p>
            <div className="modal-footer">
              <button
                className="modal-btn button is-rounded is-danger hvr-pulse-shrink"
                onClick={signOut}
              >
                Logout Now
              </button>

              <button
                className="modal-btn button is-rounded is-primary hvr-pulse-shrink"
                onClick={keepActive}
              >
                Keep Me Active
              </button>
            </div>
          </div>
        </Animated>
      </Modal>

      <div>
        <IdleTimer
          ref={idleTimerRef}
          timeout={inactiveTimer}
          onIdle={onIdle}
        ></IdleTimer>
      </div>
    </div>
  );
}

export default IdleTimerContainer;
