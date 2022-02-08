import React from "react";
import ToolBar from "pages/Admin/Analytics/AnalyticsToolBar";
import AnalyticsItem from "pages/Admin/Analytics/AnalyticsItem";
class Analytics extends React.Component {
  render() {
    return (
      <div>
        <ToolBar />
        <div className="analytics-wrapper">
          {/* choose which level to show */}
          <div className="level-container">
            {/* each line has 12 slots */}
            <div className="columns">
              <div className="column is-2">
                <div className="level-btn button is-primary">Level 1</div>
              </div>
              <div className="column is-2">
                <div className="level-btn  button is-primary">Level 2</div>
              </div>
              <div className="column is-2">
                <div className="level-btn button is-primary">Level 3</div>
              </div>
              <div className="column is-2">
                <div className="level-btn button is-primary">Level 4</div>
              </div>
              <div className="column is-2">
                <div className="level-btn button is-primary">Level 5</div>
              </div>
              <div className="column is-2">
                <div className="level-btn  button is-primary">Custom</div>
              </div>
            </div>
          </div>

          {/* user list */}
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
                <p class="title a-stat">73%</p>
              </div>
            </div>
          </nav>

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
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
            <AnalyticsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
