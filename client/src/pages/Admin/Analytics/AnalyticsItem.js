import React from "react";
import { formatTime } from "utils/format";

const AnalyticsItem = (props) => {
    // deconstruct props
  const { time, accuracy, username, complete_date } = props.item || {};
  return (
    <div className="columns is-vcentered item-wrapper has-text-centered">
      <div className="column">
        <span className="rank">1</span>
      </div>

      <div className="column a-item-name">{username}</div>

      <div className="column">
        <span className="a-item-time">{formatTime(time)}</span>
      </div>

      <div className="column">
        <span className="a-item-time">{accuracy}%</span>
      </div>

      <div className="column">
        <span className="a-item-date">{complete_date}</span>
      </div>
    </div>
  );
};

export default AnalyticsItem;
