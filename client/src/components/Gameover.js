import React from "react";

class GameOver extends React.Component {
  render() {
    return (
      <div className="menu-content">
        {/* header */}
        <div className="box has-text-centered has-background-danger">
          <p className="title is-1 has-text-light">You Lost</p>
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
              <span className="title">Restart</span>
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.close();
              }}
            >
              <span className="title">Choose Previous</span>
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.close();
              }}
            >
              <span className="title">Latest Level</span>
            </button>
          </div>
          <div className="container">
            <button
              className="m-btn button is-primary is-rounded is-large"
              onClick={() => {
                this.props.close();
              }}
            >
              <span className="title">Quit Game</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
