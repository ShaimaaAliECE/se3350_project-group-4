/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PopupMenu from "components/PopupMenu";
import Pause from "components/Pause";
import { withRouter, } from "react-router-dom";
import { Animated } from "react-animated-css";


// header component for levels
const LevelHeader = (props) => {
  // ----- Timer ----- //

 
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
          <li className="is-active">
            <a>
              <span className="has-text-primary">LEVEL {props.level} </span>
            </a>
          </li>
          <li className="is-active">
            <a >
              <span className="icon is-small">
                <i className="fas fa-clock hvr-buzz" aria-hidden="true"></i>
              </span>
              <span>00:00:00</span>
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
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Animated>
  );
};

export default withRouter(LevelHeader);
