//imports

import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/LevelComponents/Block";
import StepsScroller from "components/StepsScroller";
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";

class LevelOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: true,
      step: 0,
      instructions: [],
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
      // ------ Modal States ----- //
      showModal: true, //enable modal rendering
      showStartModal: true, //show start level modal by default
      showEndModal: false, //dont show endModal by default
      showGameoverModal: false, //dont show gameover Modal by default

      // ----- Game State ----- //
      level: 1,
      lives: 3,
      time: 0,
      lowerLimit: 1,
      upperLimit: 20,
      boxCount: 10,
    };

    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePrevStep = this.handlePrevStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.generateBlocks = this.generateBlocks.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleGameover = this.handleGameover.bind(this);
  }

  //** Modal Related functions **/
  // execute when start button on the modal is pressed
  handleStart() {
    // generate new array
    this.generateArray();
    // hide start modal
    this.setState({ showModal: false, showStartModal: false });
    // start timer
  }

  // executes when the level ends
  handleEnd() {
    // end timer
    // show end modal
    this.setState({
      showModal: true,
      showEndModal: true,
      showGameoverModal: false,
    });

    // save (username, time, remaining lives, completion date as logged data)
  }

  // executes when player life reaches 0
  handleGameover() {
    // end timer
    // show gameover modal
    this.setState({
      showModal: true,
      showEndModal: false,
      showGameoverModal: true,
    });
    // save (username, time, remaining lives, completion date as logged data)
  }

  // render the appropriate modal based on current game state
  renderModal() {
    const StartModalBody = () => {
      // modal content
      return (
        <div>
          <li>
            The steps of the algorithm would be executed as visual animation
            accompanied with explanation texts
          </li>
          <li>Navigate through the steps using the step player.</li>
        </div>
      );
    };

    // if `showStartModal` state is true
    if (this.state.showStartModal) {
      return (
        //show level start modal
        <StartModal
          handleStart={this.handleStart}
          title={this.state.level}
          body={<StartModalBody />}
          lowerLimit={this.state.lowerLimit}
          upperLimit={this.state.upperLimit}
          boxCount={this.state.boxCount}
        />
      );
      // if `showEndModal` state is true
    } else if (this.state.showEndModal && !this.state.showGameoverModal) {
      return (
        <EndModal
          title={this.state.level}
          life={this.state.lives}
          time={this.state.time}
          next="Level 2"
        />
      );
    } else if (this.state.showGameoverModal && !this.state.showEndModal) {
      return (
        // show gameover modal
        <GameoverModal title={this.state.level} time={this.state.time} />
      );
    }
  }

  //creates array at the rendering of the class
  generateArray() {
    let currentOrd = [];
    let currentInstr = [];
    var sorting = new MergeSort(1, 20, 10);
    // console.log(sorting);
    sorting.sort(sorting.getArray(), currentOrd, [], currentInstr, false);
    //retrieves array of instructions and order of steps
    this.setState({
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

  // handle previous step
  handlePrevStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step; //block order to retrieve
    const currentBox = this.state.boxIndex[step] + 1;
    box[currentBox] = this.state.order[step];
    // console.log(box);
    step--;
    this.setState({
      boxes: box,
      step: step,
      lineOne: this.state.instructions[step + 1],
      lineTwo: this.state.instructions[step],
      lineThree: this.state.instructions[step - 1],
    });
  }

  generateBlocks() {
    const order = this.state.order.slice()[0];
    if (order !== undefined) {
      let temp = order.split(",");
      temp.map((element) => {
        console.log(element);
        return <Block value={element} />;
      });
    }
  }

  //rendering block with the state of the box
  renderBlock(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  render() {
    return (
      <div>
        {this.state.showModal ? (
          this.renderModal()
        ) : (
          <div>
            <div className="header mb-6">
              <LevelHeader level="1" />
              {/* !!!!!modal testing */}
              <div className="box is-pink">
                <h2>For Developer Only</h2>
                <button
                  className="button is-success is-outlined"
                  onClick={this.handleEnd}
                >
                  level complete
                </button>
                <button
                  className="button is-danger is-outlined"
                  onClick={this.handleGameover}
                >
                  gameover
                </button>
              </div>
              {/* !!!!!modal testing */}
            </div>

            <div className="body">
              {/* {this.generateBlocks()} */}
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
                <div id="fourth">
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
                  handlePrevStep={this.handlePrevStep}
                  enablePrev={true}
                  enableReset={true}
                  enableNext={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LevelOne;
