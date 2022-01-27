import React from "react";
import LevelHeader from "../components/LevelHeader";

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedPlaying: false,
      paused: true,
      array: [8, 9, 2, 1, 3, 2],
    };
  }

  togglePlayPause = () => {
    let current = this.state.paused;
    this.setState({ paused: !current });
  };

  async componentDidMount() {
    const url = "tbd";
    const response = await fetch(url);
    const array = await response.json();
    this.setState({ array: array });
  }

  render() {
    let paused = this.state.paused;
    let button;
    if (paused) {
      button = <PlayButton onClick={this.togglePlayPause} />;
    } else {
      button = <PauseButton onClick={this.togglePlayPause} />;
    }
    return (
      <div className="">
        <div className="header"></div>
        <div className="body">
          <div className="blocks"></div>
          <div className="alg-steps"></div>
          <div className="play/pause/playagain">{button}</div>
        </div>
      </div>
    );
  }
}

function PlayButton(props) {
  return <button onClick={props.onClick}>PLAY!!!!!!!!!!!!!!!!!!!!</button>;
}

function PauseButton(props) {
  return <button onClick={props.onClick}>PAUSE :(</button>;
}

function ReplayButton() {
  return <div>Replay</div>;
}

export default LevelOne;
