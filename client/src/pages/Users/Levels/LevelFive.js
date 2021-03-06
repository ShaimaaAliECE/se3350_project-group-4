import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import "../../../css/LevelStyles.css";
import { withRouter } from "react-router-dom";
import Arrays from "components/LevelComponents/MergeSortBlock";
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";
import { toast } from "react-toastify";
import axios from "utils/axios";

//LEVEL 4 must have a set of 20 numbers are randomly generated out of the range (1-50)
class LevelFive extends React.Component {
  constructor(props) {
    super(props);
    global.auth.setCurrentHealth(3);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 0,
      instructions: [],
      order: [],
      splitOrder: [],
      win: false,

      // ------ Modal States ----- //
      showModal: true, //enable modal rendering
      showStartModal: true, //show start level modal by default
      showEndModal: false, //dont show endModal by default
      showGameoverModal: false, //dont show gameover Modal by default

      // ----- Game State ----- //
      level: 5,
      lives: global.auth.getCurrentHealth(),
      time: 0, //total time (ms) that the timer has been running since start/reset
      timerOn: false, //boolean value for if the timer is on
      timerStart: 0, // when the timer was started (or the past projected start time if the timer is resumed)
      lowerLimit: 1,
      upperLimit: 100,
      boxCount: 50,
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleGameover = this.handleGameover.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.logGameData = this.logGameData.bind(this);
  }

  //** Modal Related functions **/
  // execute when start on the modal is pressed
  handleStart() {
    // generate new array
    this.generateArray();
    // hide start modal
    this.setState({ showModal: false, showStartModal: false });
    // set current level
    global.auth.setCurrentLevel("5");
    // start timer
    this.startTimer();
  }

  logGameData = () => {
    let id;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    axios.get("/level5").then((res) => {
      id = res.data.length + 1;
    });
    const logItem = {
      id: id,
      time: this.state.time,
      accuracy: global.auth.getCurrentHealth(),
      username: global.auth.getUser().username,
      complete_date: today,
    };
    axios.post("/level5", logItem).then((res) => {
      toast.success("Your data was recorded successfully!");
    });
  };

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
    }, 10);
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
    this.logGameData();
  }

  // executes when player life reaches 0
  handleGameover() {
    toast.clearWaitingQueue();
    // end timer
    // end timer
    this.stopTimer();
    // show gameover modal
    this.setState({
      showModal: true,
      showEndModal: false,
      showGameoverModal: true,
    });
    // save (username, time, remaining lives, completion date as logged data)
    this.logGameData();
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
          <a href="/ms/level3" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 3 <i className="fa-solid fa-play"></i>
            </span>
          </a>
          <a href="/ms/level4" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 4 <i className="fa-solid fa-play"></i>
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
          next="Custom Level"
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
    let splitOrd = [];
    // Create array using given algorithm class
    var sorting = new MergeSort(1, 100, 50);

    sorting.sort(sorting.getArray(), currentOrd, splitOrd, [], [], false);
    //retrieves array of instructions and order of steps
    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
      splitOrder: splitOrd,
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
              <LevelHeader
                level="5"
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                lives={global.auth.getCurrentHealth()}
              />
            </div>
            <div>
              <Arrays
                array={this.state.initialArr}
                label="initial"
                order={this.state.splitOrder}
                nextStep={this.handleNextStep}
                initialSize={this.state.boxCount}
                handleGameover={this.handleGameover}
                handleEnd={this.handleEnd}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LevelFive);
