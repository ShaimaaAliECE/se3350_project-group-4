import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import "../../../css/LevelStyles.css";
import { withRouter } from "react-router-dom";
import StepsScroller from "components/StepsScroller";
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";
//Algorithm Array Block
import Arrays from "components/LevelComponents/MergeSortBlock";
import { toast } from "react-toastify";

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    global.auth.setCurrentHealth(3);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 0,
      instructions: [],
      // boxes: Array(11).fill(null),
      // boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
      splitOrder: [],
      win: false,

      // ------ Modal States ----- //
      showModal: true, //enable modal rendering
      showStartModal: true, //show start level modal by default
      showEndModal: false, //dont show endModal by default
      showGameoverModal: false, //dont show gameover Modal by default

      // ----- Game State ----- //
      level: 2,
      lives: global.auth.getCurrentHealth(),
      time: 0, //total time (ms) that the timer has been running since start/reset
      timerOn: false, //boolean value for if the timer is on
      timerStart: 0, // when the timer was started (or the past projected start time if the timer is resumed)
      lowerLimit: 1,
      upperLimit: 20,
      boxCount: 10,
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleGameover = this.handleGameover.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  //** Modal Related functions **/
  // execute when start on the modal is pressed
  handleStart() {
    // generate new array
    this.generateArray();
    // hide start modal
    this.setState({ showModal: false, showStartModal: false });
    // set current level
    global.auth.setCurrentLevel("2");
    // start timer
    this.startTimer();
  }

  // timer functions
  startTimer = () => {
    this.setState({
      timerOn: true,
      time: this.state.time,
      timerStart: Date.now() - this.state.time,
    });
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.timerStart,
      });
    }, 1);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  // executes when the level ends
  handleEnd() {
    toast.clearWaitingQueue();
    // end timer
    this.stopTimer();
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
    toast.clearWaitingQueue();
    // end timer
    this.stopTimer();
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
            The steps of the algorithm are displayed in the text allowing the
            user to move the numbers according to the current step.
          </li>
          <li>Navigate through the steps using the step player.</li>
        </div>
      );
    };

    const GameoverModalBody = () => {
      return (
        <div>
          <a href="/ms/level1" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 1 <i className="fa-solid fa-play"></i>
            </span>
          </a>
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
          life={global.auth.getCurrentHealth()}
          time={this.state.time}
          next="Level 3"
        />
      );
    } else if (this.state.showGameoverModal && !this.state.showEndModal) {
      return (
        // show gameover modal
        <GameoverModal
          title={this.state.level}
          time={this.state.time}
          dropdownItems={<GameoverModalBody />}
        />
      );
    }
  }

  //creates array at the rendering of the class
  generateArray() {
    let currentOrd = [];
    let currentInstr = [];
    let splitOrd = [];
    // Create array using given algorithm class
    var sorting = new MergeSort(
      this.state.lowerLimit,
      this.state.upperLimit,
      this.state.boxCount
    );

    sorting.sort(
      sorting.getArray(),
      currentOrd,
      splitOrd,
      currentInstr,
      [],
      false
    );
    //retrieves array of instructions and order of steps
    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
      splitOrder: splitOrd,
      instructions: currentInstr,
    });
  }

  //sets order
  setOrder(val) {
    this.setState({ order: val });
  }

  //reset button handling
  handleReset(e) {
    // const box = Array(11).fill(null);
    let step = 0;
    this.setState({
      step: step,
      // boxes: box,
      lineOne: null,
      lineTwo: null,
      lineThree: null,
    });
  }

  //handles next step
  handleNextStep(e) {
    // const box = this.state.boxes.slice();
    var step = this.state.step; //block order to retrieve
    // const currentBox = this.state.boxIndex[step] - 1;
    // box[currentBox] = this.state.order[step];

    step++;
    console.log("next step");
    this.setState({
      // boxes: box,
      step: step,
      lineOne: this.state.instructions[step - 1],
      lineTwo: this.state.instructions[step],
      lineThree: this.state.instructions[step + 1],
    });
  }

  handleMerge() {
    console.log("merge");
  }

  handleSplit() {
    console.log("split");
  }

  render() {
    return (
      <div>
        {this.state.showModal ? (
          this.renderModal()
        ) : (
          <div>
            <div className="header mb-6">
              <LevelHeader
                level="2"
                lives={global.auth.getCurrentHealth()}
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                handleGameover={this.handleGameover}
              />
              {/* !!!!!modal testing */}
              {/* <div className="box is-pink">
                <h2>For Developer Only</h2>
                <button
                  className="button is-success is-outlined"
                  onClick={this.handleEnd}
                >
                  Level Complete
                </button>
                <button
                  className="button is-danger is-outlined"
                  onClick={this.handleGameover}
                >
                  Gameover
                </button>
              </div> */}
              {/* !!!!!modal testing */}
            </div>
            <div>
              <Arrays
                array={this.state.initialArr}
                label="initial"
                order={this.state.splitOrder}
                initialSize={this.state.boxCount}
                nextStep={this.handleNextStep}
                handleGameover={this.handleGameover}
                handleEnd={this.handleEnd}
              />
            </div>
            <div>
              <StepsScroller
                lineOne={this.state.lineOne}
                lineTwo={this.state.lineTwo}
                lineThree={this.state.lineThree}
                enablePrev={false}
                enableReset={false}
                enableNext={false}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LevelTwo);
