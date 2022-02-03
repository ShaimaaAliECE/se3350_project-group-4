import React from "react";
import LevelHeader from "../components/LevelHeader";
import MergeSort from "../algorithms/mergeSort.mjs";
import Block from "components/Block";

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedPlaying: false,
      step: 0,
      boxes: Array(11).fill("hi"),
      boxIndex: [1, 2, 3, 4, 5, 4, 8, 9, 9, 5, 6, 7, 6, 10, 11, 11, 7, 3, 1],
      order: [],
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
  }

  generateArray() {
    let split = [];
    let merge = [];
    let currentOrd = [];
    var sorting = new MergeSort(1, 20, 10);
    sorting.sort(sorting.getArray(), split, merge, currentOrd, false);

    this.setState({ order: currentOrd });
  }

  setOrder(val) {
    this.setState({ order: val });
  }

  handleNextStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step;
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];
    this.setState({
      boxes: box,
      step: step++,
    });
  }

  componentDidMount() {
    this.generateArray();
  }

  renderBlock(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  render() {
    return (
      <div className="">
        <div className="header mb-6">
          <LevelHeader />
        </div>
        <div className="body">
          <div className="sort"></div>
          <div className="alg-steps">
            <div>
              <div className="box-surround">
                <div id="top">{this.renderBlock(1)}</div>
                <div id="second">
                  {this.renderBlock(2)}
                  {this.renderBlock(3)}
                </div>
                <div id="third">
                  {this.renderBlock(4)}
                  {this.renderBlock(5)}
                  {this.renderBlock(6)}
                  {this.renderBlock(7)}
                </div>
                <div id="third">
                  <Block />
                  <Block />
                  {this.renderBlock(8)}
                  {this.renderBlock(9)}
                  <Block />
                  <Block />
                  {this.renderBlock(10)}
                  {this.renderBlock(11)}
                </div>
                <button
                  className="button is-white"
                  onClick={this.handleNextStep}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LevelOne;
