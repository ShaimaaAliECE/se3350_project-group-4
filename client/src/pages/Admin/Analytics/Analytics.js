import React, { useState, useEffect } from "react";
import ToolBar from "pages/Admin/Analytics/AnalyticsToolBar";
import AnalyticsItem from "pages/Admin/Analytics/AnalyticsItem";
import axios from "utils/axios";

const Analytics = () => {
  // use state hook
  const [items, setItems] = useState([]);

  // using life cycle hook in functional component
  // useEffect(() => {
  //   axios.get("/level1").then((res) => setItems(res.data));
  // });

  const averageAccuracy = () => {
    const averageAccuracy = items
      .map((item) => item.accuracy)
      .reduce((a, value) => a + value, 0);
    return averageAccuracy;
  };

  function loadData(level) {
    if (level === "level1") {
      axios.get("/level1").then((res) => setItems(res.data));
    } else if (level === "level2") {
      axios.get("/level2").then((res) => setItems(res.data));
    } else if (level === "level3") {
      axios.get("/level3").then((res) => setItems(res.data));
    } else if (level === "level4") {
      axios.get("/level2").then((res) => setItems(res.data));
    }
  }

  return (
    <div>
      <ToolBar />
      <div className="analytics-wrapper">
        {/* choose which level to show */}
        <div className="level-container">
          {/* each line has 12 slots */}

          <div className="columns">
            <div className="column is-2">
              <div
                className="level-btn button is-primary"
                onClick={() => loadData("level1")}
              >
                Level 1
              </div>
            </div>
            <div className="column is-2">
              <div className="level-btn  button is-primary" onClick={() => loadData("level2")}>Level 2</div>
            </div>
            <div className="column is-2">
              <div className="level-btn button is-primary" onClick={() => loadData("level3")}>Level 3</div>
            </div>
            <div className="column is-2">
              <div className="level-btn button is-primary" onClick={() => loadData("level4")}>Level 4</div>
            </div>
            <div className="column is-2">
              <div className="level-btn button is-primary" onClick={() => loadData("level5")}>Level 5</div>
            </div>
            <div className="column is-2">
              <div className="level-btn  button is-primary" onClick={() => loadData("level6")}>Custom</div>
            </div>
          </div>
        </div>

        {/* stats level */}
        <nav className="level mt-5 has-text-light">
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Level</p>
              <p class="title a-stat">1</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Times Completed</p>
              <p class="title a-stat">321</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Fastest Time</p>
              <p class="title a-stat">5:21</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Average Accuracy</p>
              <p class="title a-stat"></p>
            </div>
          </div>
        </nav>
        {/* list*/}
        <div className="items-list">
          {/* table header */}
          <div className="columns is-vcentered has-text-dark has-background-primary">
            <div className="column">
              <strong>Rank</strong>
            </div>

            <div className="column ">
              <strong>Username</strong>
            </div>

            <div className="column">
              <strong>Time</strong>
            </div>

            <div className="column">
              <strong>Accuracy</strong>
            </div>

            <div className="column">
              <strong>Completion Date</strong>
            </div>
          </div>
          {items.map((item) => (
            <AnalyticsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
