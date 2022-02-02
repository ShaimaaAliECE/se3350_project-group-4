import React from "react";
import PopupMenu from "components/PopupMenu";

// header component for levels
const LevelHeader = (props) => {
  // open pause menu
  const toPause = () => {
    PopupMenu.open({});
  };

  return (
    <div>
      <div className="lv-header">
        <div>
          <nav class="level">
            <p class="level-item has-text-centered">
              <i class="fas fa-heart heart"></i>
              <span>x 3</span>
            </p>
            <p class="level-item has-text-centered">
              <span>TIME SPENT IN CURRENT LEVEL:</span>
              <span>XX:XX</span>
            </p>
            <p class="level-item has-text-centered">
              <span className="button is-small is-primary" onClick={toPause}>
              <i className="pause fas fa-pause"></i>
              </span>
            </p>
            <p class="level-item has-text-centered has-text-primary">
              <span>LEVEL 1</span>
            </p>
            <p class="level-item has-text-centered">
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
