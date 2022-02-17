import React from "react";

class Pause extends React.Component {

  
  render() {
    return (
      <div className="menu-content">
        {/* header */}
        <div className="box has-text-centered">
          <p className="title is-1">Paused</p>
        </div>
        {/* buttons */}
        <div className="btns">
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.close();
              }}
            >
              <span className="title">Resume</span>
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.restart();
              }}
            >
              <span className="title">Restart</span>
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.close("exit");
              }}
            >
              <span className="title">Exit</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pause;
