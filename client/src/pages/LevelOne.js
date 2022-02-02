import React from "react";
import LevelHeader from "../components/LevelHeader";
import MergeSort from "../algorithms/mergeSort.mjs";

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
    let split = [];
    let merge = [];
    var sorting = new MergeSort(1, 20, 10);
    let sorted = sorting.sort(sorting.getArray(), split, merge);

    let storageSplit = [];
    let storageMerge = [];
    let allElements = [];

    let temp = [];

    for (let i = 0; i < split.length; i++) {
      if (!temp.includes(split[i].charAt(0))) {
        storageSplit.push([[split[i].slice(2)]]);
        temp.push(split[i].charAt(0));
      } else {
        storageSplit[split[i].charAt(0)].push([split[i].slice(2)]);
      }
    }

    for (let i = 0; i < storageSplit[0][0][0].split(",").length; i++) {
      // console.log(storageSplit[0][0][0].split(","));
      allElements.push(storageSplit[0][0][0].split(",")[i]);
    }

    let cap = storageSplit.length - 1;
    temp = [];

    for (let i = 0; i < merge.length; i++) {
      let index = cap - merge[i].charAt(0);
      let data = merge[i].slice(2);

      if (!temp.includes(index)) {
        storageMerge.push([[data]]);
        temp.push(index);
      } else {
        storageMerge[index].push([data]);
      }
    }
    let paused = this.state.paused;
    let button;
    if (paused) {
      button = <PlayButton onClick={this.togglePlayPause} />;
    } else {
      button = <PauseButton onClick={this.togglePlayPause} />;
    }
    return (
      <div className="">
        <div className="header">
          <LevelHeader />
        </div>
        <div className="body">
          <div className="sort"></div>
          <div className="alg-steps">
            <div>
              <div className="tile is-ancestor is-vertical">
                {storageSplit.map((element) => {
                  return (
                    <div className="tile is-parent mt-6 mx-6">
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
              <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent mt-6 mx-6">
                  {allElements.map((element) => {
                    return (
                      <div className="tile is-child has-text-centered box mx-5">
                        <div id="">{element}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="tile is-ancestor is-vertical">
                {storageMerge.map((element) => {
                  return (
                    <div className="tile is-parent mt-6 mx-6">
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
