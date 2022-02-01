import React from "react";

class EditLevel extends React.Component {
  render() {
    return (
      <div className="select-wrapper">
        <div className="select-box">
          {/* title */}
          <div className="title section">
            <h2 className="subtitle is-3 has-text-light">Start Editing</h2>
            <h1 className="title is-1 has-text-primary">Merge Sort</h1>
          </div>
          {/* level select buttons */}
          <div className="columns is-multiline buttons are-large">
            {/* lv 1 */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Level 1</span>
              </button>
            </div>
            {/* lv 2 */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Level 2</span>
              </button>
            </div>
            {/* lv 3 */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Level 3</span>
              </button>
            </div>
            {/* lv 4 */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Level 4</span>
              </button>
            </div>
            {/* lv 5 */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Level 5</span>
              </button>
            </div>
            {/* custom lv */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-primary">
                <span className="btn-text">Edit Custom</span>
              </button>
            </div>
            {/* back button */}
            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-light">
                <span className="btn-text">Back</span>
              </button>
            </div>

            <div className="column is-half">
              <button className="lv-btn button is-rounded has-background-light">
                <span className="btn-text">View Analytics</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default EditLevel;
