import React from "react";
import ToolBar from "pages/Admin/Analytics/AnalyticsToolBar";

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

          {/* table */}
          <div className="table-container">
            <table className="table">
              {/* table */}
              <thead>
                <tr>
                  <th>
                    <abbr title="Position">ID</abbr>
                  </th>
                  <th>
                    <abbr title="username">Username</abbr>
                  </th>
                  <th>
                    <abbr title="Accuracy">Accuracy</abbr>
                  </th>
                  <th>
                    <abbr title="Time">Best Time</abbr>
                  </th>
                </tr>
              </thead>
              {/* table footer */}
              <tfoot>
                <tr>
                  <th>
                    <abbr title="Position">ID</abbr>
                  </th>
                  <th>
                    <abbr title="username">Username</abbr>
                  </th>
                  <th>
                    <abbr title="Accuracy">Accuracy</abbr>
                  </th>
                  <th>
                    <abbr title="Time">Best Time</abbr>
                  </th>
                </tr>
              </tfoot>

              {/* table body */}
              <tbody>
                {/* row */}
                <tr>
                  <th>1</th>
                  <td>admin0</td>
                  <td>33</td>
                  <td>18.55</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
