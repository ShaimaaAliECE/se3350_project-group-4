import React from "react";
// import Pause from 'components/Pause';

// header component for levels
const LevelHeader = (props) => {
  // open pause menu
  const toPause = () => {
    //Pause.open({
    //})
  };

  return (
    <div>
      <div className="header">
        <div>
          <nav class="level">
            <p class="level-item has-text-centered">
              <i class="fas fa-heart"></i>
              <span>x 3</span>
            </p>
            <p class="level-item has-text-centered">
              <span>TIME SPENT IN CURRENT LEVEL:</span>
              <span>XX:XX</span>
            </p>
            <p class="level-item has-text-centered">
              <span onClick={toPause}>PAUSE</span>
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
