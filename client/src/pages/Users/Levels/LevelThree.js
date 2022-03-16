import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Modal from "components/Modals/StartModal";
import "../../../css/LevelStyles.css";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Arrays from "components/LevelComponents/MergeSortBlock"
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";

toast.configure();
//LEVEL 3 must have a set of 10 numbers are randomly generated out of the range (1-20)
class LevelThree extends React.Component {
  constructor(props) {
    super(props);
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
      level: 3,
      lives: 3,
      time: 0,
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
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  //** Modal Related functions **/
  // execute when start on the modal is pressed
  handleStart() {
    // generate new array
    this.generateArray();
    // hide start modal
    this.setState({ showModal: false, showStartModal: false });
    // start timer
    global.auth.setCurrentLevel("3");
  }

  // executes when the level ends
  handleEnd() {
    // show end modal
    this.setState({
      showModal: true,
      showEndModal: true,
      showGameoverModal: false,
    });
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
          <li>The user is to decide what needs to be done at every step</li>
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
          <a href="/ms/level2" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 2 <i className="fa-solid fa-play"></i>
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
          life={this.state.lives}
          time={this.state.time}
          next="Level 4"
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
    var sorting = new MergeSort(1, 20, 10);

    sorting.sort(sorting.getArray(), currentOrd, splitOrd, currentInstr, false);
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
    this.setState({
      // boxes: box,
      step: step,
      lineOne: this.state.instructions[step - 1],
      lineTwo: this.state.instructions[step],
      lineThree: this.state.instructions[step + 1],
    });
  }

  checkCorrect(arr) {}

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
              <LevelHeader level="3" />
              {/* !!!!!modal testing */}
              <div className="box is-pink">
                <h2>For Developer Only</h2>
                <button
                  className="button is-success is-outlined"
                  onClick={this.handleEnd}
                >
                  Level complete
                </button>
                <button
                  className="button is-danger is-outlined"
                  onClick={this.handleGameover}
                >
                  Gameover
                </button>
              </div>
              {/* !!!!!modal testing */}
            </div>
            <div>
              <Arrays
                array={this.state.initialArr}
                label="initial"
                order={this.state.splitOrder}
                nextStep={this.handleNextStep}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LevelThree);