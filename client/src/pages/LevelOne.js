import React from "react";

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedPlaying: false,
      paused: true,
    };
  }
  render() {
    return (
      <div className="">
        <div className="header"></div>
        <div className="body">
          <div className="blocks"></div>
          <div className="alg-steps"></div>
          <div className="play/pause/playagain">
            {this.state.finishedPlaying} ? {this.state.paused} ? <PlayButton />{" "}
            : <PauseButton /> : <ReplayButton />
          </div>
        </div>
      </div>
    );
  }
}

function PlayButton() {
  return <div>play</div>;
}

function PauseButton() {
  return <div>pause</div>;
}

function ReplayButton() {
  return <div>Replay</div>;
}

export default LevelOne;
