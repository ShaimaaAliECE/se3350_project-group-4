import React from "react";
import PopupMenu from "components/PopupMenu";
import Pause from "components/Pause";

// header component for levels
const LevelHeader = (props) => {
  // open pause menu
  const toPause = () => {
    PopupMenu.open({
      component: Pause,
      callback: data => {
        console.log(data);
      }
    });
  };

  return (
    <div>
      <div className="lv-header">
        <div>
          <nav className="level">
            <p className="level-item has-text-centered">
              <i className="fas fa-heart heart"></i>
              <span>x 3</span>
            </p>
            <p className="level-item has-text-centered">
              <span>TIME SPENT IN CURRENT LEVEL:</span>
              <span>XX:XX</span>
            </p>
            <p className="level-item has-text-centered">
              <span className="button is-small is-primary" onClick={toPause}>
              <i className="pause fas fa-pause"></i>
              </span>
            </p>
            <p className="level-item has-text-centered has-text-primary">
              <span>LEVEL 1</span>
            </p>
            <p className="level-item has-text-centered">
              <span>NEXT LEVEL</span>
            </p>
          </nav>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default LevelHeader;
