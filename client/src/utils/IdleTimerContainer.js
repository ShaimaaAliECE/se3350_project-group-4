import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function IdleTimerContainer(props) {
  const [showIdleModal, setIdleModal] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    setIdleModal(true);
    sessionTimeoutRef.current = setTimeout(Logout, 2000);
  };

  
  const Logout = () => {
    
    clearTimeout(sessionTimeoutRef.current);
    global.auth.logout();
    window.location.reload(false);
    toast.error("Redirecting back to Home...");
  };

  const stayActive = () => {
    setIdleModal(false);
    clearTimeout(sessionTimeoutRef.current);
    toast.success("You are now active again");
  };

  return (
    <div>
      <Modal isOpen={showIdleModal}>
        <h2>Are you still there?</h2>
        <p>You will be logged out soon.</p>
        <button onClick={Logout}>Log me out</button>
        <button onClick={stayActive}> Keep Me Signed In</button>
      </Modal>
      <div>
        <IdleTimer
          ref={idleTimerRef}
          timeout={5000}
          onIdle={onIdle}
        ></IdleTimer>
      </div>
    </div>
  );
}

export default IdleTimerContainer;
