import React, { useState } from "react";
import ToolBar from "pages/Admin/Analytics/AnalyticsToolBar";
import AnalyticsItem from "pages/Admin/Analytics/AnalyticsItem";
import axios from "utils/axios";
import { formatTime } from "utils/format";

const Analytics = () => {
  // use state hooks
  const [items, setItems] = useState([]); //default empty object
  const [levelName, setLevelName] = useState(0); //default
  const [timesCompleted, setTimesCompleted] = useState(0);

  // get the average accuracy of the corresponding level
  const averageAccuracy = () => {
    const average = parseFloat(
      items.map((item) => item.accuracy).reduce((a, value) => a + value, 0) /
        timesCompleted
    ).toFixed(2);
    return average;
  };


  //  get the fastest record in the response
 const fastestTime = () => {
   let times = items.map((item)=>item.time);
   var min = Math.min.apply( null, times );
   var date = new Date(0);
   date.setSeconds(min);
   return date.toISOString().substr(11, 8);
 }

  // load data into AnalyticItems
  const loadData = (level) => {
    if (level === "level1") {
      axios.get("/level1").then((res) => {
        setItems(res.data);
        setLevelName(1);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level2") {
      axios.get("/level2").then((res) => {
        setItems(res.data);
        setLevelName(2);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level3") {
      axios.get("/level3").then((res) => {
        setItems(res.data);
        setLevelName(3);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level4") {
      axios.get("/level4").then((res) => {
        setItems(res.data);
        setLevelName(4);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "level5") {
      axios.get("/level5").then((res) => {
        setItems(res.data);
        setLevelName(5);
        setTimesCompleted(res.data.length);
      });
    } else if (level === "custom") {
      axios.get("/custom").then((res) => {
        setItems(res.data);
        setLevelName("C");
        setTimesCompleted(res.data.length);
      });
    }
  };

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
              <div
                className="level-btn  button is-primary"
                onClick={() => loadData("level2")}
              >
                Level 2
              </div>
            </div>
            <div className="column is-2">
              <div
                className="level-btn button is-primary"
                onClick={() => loadData("level3")}
              >
                Level 3
              </div>
            </div>
            <div className="column is-2">
              <div
                className="level-btn button is-primary"
                onClick={() => loadData("level4")}
              >
                Level 4
              </div>
            </div>
            <div className="column is-2">
              <div
                className="level-btn button is-primary"
                onClick={() => loadData("level5")}
              >
                Level 5
              </div>
            </div>
            <div className="column is-2">
              <div
                className="level-btn  button is-primary"
                onClick={() => loadData("custom")}
              >
                Custom
              </div>
            </div>
          </div>
        </div>

        {/* stats level */}
        <nav className="level mt-5 has-text-light">
          <div className="level-item has-text-centered">
            <div>
              <p class="heading">Level</p>
              <p class="title a-stat">{levelName}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Times Completed</p>
              <p class="title a-stat">{timesCompleted}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Fastest Time</p>
              <p class="title a-stat">{fastestTime()}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Average Accuracy</p>
              <p class="title a-stat">{averageAccuracy()}%</p>
            </div>
          </div>
        </nav>
        {/* list*/}
        <div className="items-list">
          {/* table header */}
          <div className="columns is-vcentered has-text-dark has-background-primary has-text-centered">
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
