import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/Block";
import StepsScroller from "components/StepsScroller";

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 0,
      instructions: [],
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.generateArrayBlock = this.generateArrayBlock.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
  }

  //creates array at the rendering of the class
  generateArray() {
    let currentOrd = [];
    let currentInstr = [];
    var sorting = new MergeSort(1, 20, 10);
    // console.log(sorting);
    sorting.sort(sorting.getArray(), currentOrd, currentInstr, false);
    //retrieves array of instructions and order of steps
    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
      instructions: currentInstr,
    });
  }

  //sets order
  setOrder(val) {
    this.setState({ order: val });
  }

  //reset button handling
  handleReset(e) {
    const box = Array(11).fill(null);
    let step = 0;
    this.setState({
      step: step,
      boxes: box,
      lineOne: null,
      lineTwo: null,
      lineThree: null,
    });
  }

  //handles next step
  handleNextStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step; //block order to retrieve
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];
    // console.log(box);
    step++;
    this.setState({
      boxes: box,
      step: step,
      lineOne: this.state.instructions[step - 1],
      lineTwo: this.state.instructions[step],
      lineThree: this.state.instructions[step + 1],
    });
  }

  handleMerge() {
    console.log("hi");
  }

  handleSplit() {
    console.log("split");
  }

  generateArrayBlock() {
    const arr = this.state.initialArr.slice();
    if (arr !== undefined) {
      return arr.map((element) => {
        return <Block value={element} onClick={this.handleMerge} />;
      });
    }
  }

  componentDidMount() {
    this.generateArray();
  }

  //rendering block with the state of the box
  renderBlock(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  render() {
    return (
      <div>
        <div className="header mb-6">
          <LevelHeader level="1" />
        </div>
        <div className="body">
          <div className="box-surround">
            <SplitButton onClick={this.handleSplit} />
            <div>{this.generateArrayBlock()}</div>
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
          </div>
          <div className="alg-steps">
            <StepsScroller
              lineOne={this.state.lineOne}
              lineTwo={this.state.lineTwo}
              lineThree={this.state.lineThree}
              handleReset={this.handleReset}
              handleNextStep={this.handleNextStep}
            />
          </div>
        </div>
      </div>
    );
  }
}

function MergeButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Merge
    </button>
  );
}

function SplitButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Split
    </button>
  );
}

export default LevelTwo;
