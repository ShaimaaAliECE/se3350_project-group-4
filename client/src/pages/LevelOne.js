import React from "react";
import LevelHeader from "../components/LevelHeader";
import MergeSort from "../algorithms/mergeSort.mjs";

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedPlaying: false,
      paused: true,
    };
  }

  togglePlayPause = () => {
    let current = this.state.paused;
    this.setState({ paused: !current });
  };

  render() {
    let split = [];
    let merge = [];
    var sorting = new MergeSort(1, 20, 10);
    let sorted = sorting.sort(sorting.getArray(), split, merge);

    let storageSplit = [];
    let storageMerge = [];
    let allElements = [];

    let temp = [];

    for (let i = 0; i < split.length; i++) {
      let index = split[i].charAt(0);
      let data = split[i].slice(2);

      if (!temp.includes(index)) {
        storageSplit.push([[data]]);
        temp.push(index);
      } else {
        storageSplit[index].push([data]);
      }
    }

    for (let i = 0; i < storageSplit[0][0][0].split(",").length; i++) {
      allElements.push(storageSplit[0][0][0].split(",")[i]);
    }

    temp = [];

    for (let i = merge.length - 1; i >= 0; i--) {
      let index = merge[i].charAt(0);
      let data = merge[i].slice(2);

      if (!temp.includes(index)) {
        storageMerge.push([[data]]);
        temp.push(index);
      } else {
        storageMerge[index].push([data]);
      }
    }

    storageMerge.reverse();
    for (let i = 0; i < storageMerge.length; i++) storageMerge[i].reverse();

    let paused = this.state.paused;
    let button;
    if (paused) {
      button = <PlayButton onClick={this.togglePlayPause} />;
    } else {
      button = <PauseButton onClick={this.togglePlayPause} />;
    }
    return (
      <div className="">
        <LevelHeader />
        <div className="header">
        </div>
        <div className="body">
          <div className="sort"></div>
          <div className="alg-steps">
            <div>
              <div className="">
                {storageSplit.map((element) => {
                  return (
                    <div className="columns mx-6">
                      {element.map((innerElement) => {
                        return <div className="column box">{innerElement}</div>;
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="columns mx-6">
                  {allElements.map((element) => {
                    return (
                      <div className="column box">
                        <div id="">{element}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="tile is-ancestor is-vertical">
                {storageMerge.map((element) => {
                  return (
                    <div className="tile is-parent mt-2 mx-6">
                      {element.map((innerElement) => {
                        return (
                          <div className="tile is-child has-text-centered box mx-5">
                            {innerElement}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            );
          </div>
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
