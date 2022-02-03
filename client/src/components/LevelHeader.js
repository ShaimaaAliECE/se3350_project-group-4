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
    <div className="header">
      <div className="grid">
        <div className="start">
          <div className="lives">
            <i className="fas fa-heart"></i>
            <span>x 3</span>
          </div>
          <div className="time">
            <span>TIME SPENT IN CURRENT LEVEL:</span>
            <span>var time</span>
          </div>
        </div>
        <div className="middle">
          <span onClick={toPause}>PAUSE</span>
        </div>
        <div className="end">
            <span>
                LEVEL 1
            </span>
            <span>
                NEXT LEVEL
            </span>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default LevelHeader;
