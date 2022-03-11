/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PopupMenu from "components/PopupMenu";
import Pause from "components/Pause";
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";

// header component for levels
const LevelHeader = (props) => {
  // ----- Timer ----- //
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  // Timer control functions
  const startTimer = () => {
    if (!timerOn && time === 0) {
      setTimerOn(true);
    }
  };

  const pauseTimer = () => {
    if (timerOn) {
      setTimerOn(false);
    }
  };

  const clearTimer = () => {
    if (!timerOn && time > 0) {
      setTime(0);
    }
  };

  const resumeTimer = () => {
    if (!timerOn && time > 0) {
      setTimerOn(true);
    }
  };

  // open pause menu
  const toPause = () => {
    pauseTimer();
    PopupMenu.open({
      component: Pause,
      callback: (data) => {
        if (data === "exit") {
          setTime(0);
          props.history.push("/ms/select");
        }
        if (data === "resume") {
          setTimerOn(true);
        }
      },
    });
  };

  // redirect to next level
  const nextLevel = () => {
    if (props.level === "1") {
      props.history.push("/ms/level2");
    } else if (props.level === "2") {
      props.history.push("/ms/level3");
    } else if (props.level === "3") {
      props.history.push("/ms/level4");
    } else if (props.level === "4") {
      props.history.push("/ms/level5");
    } else if (props.level === "5") {
      props.history.push("/ms/custom");
    } else if (props.level === "custom") {
      props.history.push("/ms/select");
    }
  };

  return (
    <Animated
      animationIn="fadeInDown"
      animationOut="bounceOut"
      isVisible={true}
    >
      <div className="tabs is-centered is-large is-fullwidth has-background-dark">
        <ul>
          <div id="buttons">
            {!timerOn && time === 0 && (
              <button onClick={() => startTimer()}>Start</button>
            )}
            {timerOn && <button onClick={() => pauseTimer()}>Stop</button>}
            {!timerOn && time > 0 && (
              <button onClick={() => clearTimer()}>Reset</button>
            )}
            {!timerOn && time > 0 && (
              <button onClick={() => resumeTimer()}>Resume</button>
            )}
          </div>
          <li className="is-active">
            <a>
              <span className="has-text-primary">LEVEL {props.level} </span>
            </a>
          </li>
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fas fa-clock hvr-buzz" aria-hidden="true"></i>
              </span>
              <div id="display">
                <span>
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </div>
            </a>
          </li>
          <li className="is-active hvr-rectangle-in" onClick={toPause}>
            <a>
              <span className="icon is-small">
                <i className="fas fa-pause" aria-hidden="true"></i>
              </span>
              <span>Pause</span>
            </a>
          </li>
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i
                  className="fas fa-heart has-text-danger hvr-pulse"
                  aria-hidden="true"
                ></i>
              </span>
              <span> : 3</span>
            </a>
          </li>
          <li className="is-active">
            <a className="hvr-rectangle-out">
              <span onClick={nextLevel}>Next Level</span>
              <span className="icon is-small">
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Animated>
  );
};

export default withRouter(LevelHeader);
