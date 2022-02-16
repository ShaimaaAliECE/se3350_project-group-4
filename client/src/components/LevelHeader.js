import React from "react";
import PopupMenu from "components/PopupMenu";
import Pause from "components/Pause";
import { withRouter } from "react-router-dom";

// header component for levels
const LevelHeader = (props) => {

  // open pause menu
  const toPause = () => {
    PopupMenu.open({
      component: Pause,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  // redirect to next level
  const nextLevel = () => {
    if (props.level === "1") {
      props.history.push("/level2");
    } else if (props.level === "2") {
      props.history.push("/level3");
    } else if (props.level === "3") {
      props.history.push("/level4");
    } else if (props.level === "4") {
      props.history.push("/level5");
    } else if (props.level === "5") {
      props.history.push("/custom");
    } else if (props.level === "custom") {
      props.history.push("/select");
    }
  };

  return (
    <div>
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
              <span>TIME SPENT:</span>
              <span>XX:XX</span>
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
    </div>
  );
};

export default withRouter(LevelHeader);
