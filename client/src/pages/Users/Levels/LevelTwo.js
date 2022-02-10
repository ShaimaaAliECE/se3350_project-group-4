import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/Block";

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedPlaying: false,
      step: 0,
      instuctions: [],
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
    };

    this.generateArray();

    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  generateArray() {
    let split = [];
    let merge = [];
    let currentOrd = [];
    let currentInstr = [];
    var sorting = new MergeSort(1, 20, 10);
    sorting.sort(sorting.getArray(), currentOrd, currentInstr, false);

    this.setState({
      order: currentOrd,
      instuctions: currentInstr,
    });
  }

  // setOrder(val) {
  //   this.setState({ order: val });
  // }

  handleReset(e) {
    const box = Array(11).fill("");
    let step = 0;
    this.setState({
      step: step,
      boxes: box,
    });
  }
  generateBlocks() {}

  handleNextStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step;
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];
    console.log(box);
    step++;
    this.setState({
      boxes: box,
      step: step,
    });
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
              {this.generateBlocks()}
              {/* <div className="box-surround">
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
                <div>
                  <NextButton onClick={this.handleNextStep} />
                  <ResetButton onClick={this.handleReset} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function NextButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Next Step
    </button>
  );
}

function ResetButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Reset
    </button>
  );
}

export default LevelTwo;
