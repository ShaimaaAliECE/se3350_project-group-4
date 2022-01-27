import React from "react";

class SelectLevel extends React.Component {
  render() {
    return (
      <div className="select-wrapper">
        <div className="select-box section">
          <div className="title">
            <span className="label has-text-light">Start Learning</span>
            <span className="has-text-primary">Merge Sort</span>
          </div>
          {/* level select buttons */}
          <div class="columns">
            {/* first column */}
            <div class="column">
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  Level 1
                </button>
              </div>
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  Level 3
                </button>
              </div>
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  Level 5
                </button>
              </div>
            </div>
            {/* second column */}
            <div class="column">
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  Level 2
                </button>
              </div>
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  Level 4
                </button>
              </div>
              <div className="section">
                <button class="button is-large is-rounded has-background-primary">
                  custom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectLevel;
