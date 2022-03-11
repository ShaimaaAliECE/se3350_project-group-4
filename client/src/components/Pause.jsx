import React from "react";

class Pause extends React.Component {

  
  render() {
    return (
      <div className="menu-content">
        {/* header */}
        <header className="box has-text-centered has-background-primary">
          <p className="title is-2 ">Paused</p>
        </header>
        {/* buttons */}
        <div className="btns">
          <div className="container">
            <button
              className="m-btn button is-primary is-outlined is-rounded is-large"
              onClick={() => {
                this.props.close("resume");
              }}
            >
              Resume
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-outlined is-rounded is-large"
              onClick={() => {
                this.props.restart();
              }}
            >
              Restart
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-outlined is-rounded is-large"
              onClick={() => {
                this.props.close("exit");
              }}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pause;
