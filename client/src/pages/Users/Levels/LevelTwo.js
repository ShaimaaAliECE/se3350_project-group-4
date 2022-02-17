import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/Block";
import StepsScroller from "components/StepsScroller";
import Modal from "components/Modal";
import { Link, withRouter } from "react-router-dom";

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 1,
      instructions: [],
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
      showModal: true,
      currentArray: [],
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.generateArrayBlock = this.generateArrayBlock.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  // execute when start on the modal is pressed
  handleStart() {
    this.setState({ showModal: false });
    this.generateArray();
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
    console.log(this.state.initialArr); //prints initial array
    console.log(this.state.currentArray);
    console.log(this.state.step);
    //console.log(this.state.order[this.state.step].split(',').map(Number)); //prints latest array as numbers
    const box = this.state.boxes.slice();
    var step = this.state.step; //block order to retrieve
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];
    step++;
    this.setState({
      boxes: box,
      step: step,
      lineOne: this.state.instructions[step - 1],
      lineTwo: this.state.instructions[step],
      lineThree: this.state.instructions[step + 1],
      currentArray: this.state.order[this.state.step].split(',').map(Number),
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
        return <Block value={element} onClick={this.handleMerge}/>;
      });
    }
  }

  generateArrayBlockCurrent() {
    const arr = this.state.currentArray;
    if (arr !== undefined) {
      return arr.map((element) => {
        return <Block value={element} onClick={this.handleMerge}/>;
      });
    }
  }

  //rendering block with the state of the box
  renderBlock(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  renderBlockTwo(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  render() {
    // 
    const modal_title = "Welcome to Level 2";
    const modal_msg =
      "A set of 10 numbers are randomly generated out of the range (1-20)." + 
      "The steps of the algorithm are displayed in the text allowing the user" + 
      "to move the numbers according to the current step.";
    return (
      <div>
        {this.state.showModal ? (
          <Modal
            handleStart={this.handleStart}
            title={modal_title}
            text={modal_msg}
          />
        ) : (
          <div>
            <div className="header mb-6">
              <LevelHeader level="2" />
            </div>
            <div className="body">
              <div className="box-surround">
                <SplitButton onClick={this.handleSplit, this.handleNextStep} />
                <div>{this.generateArrayBlock()}</div>
                <div id="top"></div>
                <div id="second">
                  <div>{this.generateArrayBlockCurrent()}</div>
                </div>
                <div id="third">
                  
                </div>
                <div id="third">
                  <Block />
                  <Block />

                  <Block />
                  <Block />

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
        )}
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

export default withRouter(LevelTwo);