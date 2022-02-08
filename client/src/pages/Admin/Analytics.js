import React from "react";
import ToolBar from "pages/Admin/AnalyticsToolBar";

class Analytics extends React.Component {
  render() {
    return (
      <div>
        <ToolBar />
        <div className="analytics-wrapper">
          {/* view controller */}
          
          {/* table */}
          <div class="table-container">
            <table class="table">
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
                  <td>
                    admin0
                  </td>
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
