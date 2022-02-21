import React, { useState } from "react";
import PopupMenu from "components/PopupMenu";
import Pause from "components/Pause";
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";


// header component for levels
const LevelHeader = (props) => {

  // ----- Timer ----- //
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // start timer
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;
  // run timer
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };
  // stop timer
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  // reset timer
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  // resume timer
  const resume = () => start();

  // open pause menu
  const toPause = () => {
    PopupMenu.open({
      component: Pause,
      callback: (data) => {
        if (data === "exit") {
          props.history.push("/ms/select");
        }
      },
    });
  };

  function DisplayComponent(props) {
    const h = () => {
      if (props.time.h === 0) {
        return "";
      } else {
        return (
          <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
        );
      }
    };
    return (
      <div>
        {h()}&nbsp;&nbsp;
        <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
        &nbsp;:&nbsp;
        <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
        &nbsp;:&nbsp;
        <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
      </div>
    );
  }

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
      <div className="lv-header">
        <div>
          <nav className="level">
            {/*  */}
            <p className="level-item has-text-centered">
              <i className="fas fa-heart heart"></i>
              <span>x 3</span>
            </p>
            {/* Timer */}
            <p className="level-item has-text-centered">
            <i class="fa-solid fa-clock mr-2"></i>
              <span>Level Timer:</span>
              <span>
                <DisplayComponent time={time}/>
              </span>
            </p>
            {/* Pause button */}
            <p className="level-item has-text-centered">
              <span className="button is-small is-primary" onClick={toPause}>
                <i className="pause fas fa-pause"></i>
              </span>
            </p>
            {/* Level number */}
            <p className="level-item has-text-centered has-text-primary">
              <span>LEVEL {props.level}</span>
            </p>
            {/* Next level button */}
            <p className="level-item has-text-centered next-lv">
              <div onClick={nextLevel}>NEXT LEVEL</div>
            </p>
          </nav>
        </div>
      </div>

      {/* green divider */}
      <div className="divider"></div>
    </Animated>
  );
};

export default withRouter(LevelHeader);
