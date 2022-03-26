import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import "../../../css/LevelStyles.css";
import { withRouter, Link } from "react-router-dom";
import StepsScroller from "components/StepsScroller";

import { Animated } from "react-animated-css";
// modals
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";
//Algorithm Array Block
import Arrays from "components/LevelComponents/MergeSortBlock";
import { toast } from "react-toastify";

let size = 0;

class CustomLevel extends React.Component {
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
      level: "C",
      lives: global.auth.getCurrentHealth(),
      time: 0, //total time (ms) that the timer has been running since start/reset
      timerOn: false, //boolean value for if the timer is on
      timerStart: 0, // when the timer was started (or the past projected start time if the timer is resumed)
      lowerLimit: 1,
      upperLimit: 20,
      boxCount: 3,
    };
    this.startLevel = this.startLevel.bind(this);
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
    this.startLevel();
    // hide start modal
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

  // retrieve info from form
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

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
  // render the appropriate modal based on current game state
  renderModal() {
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
          <a href="/ms/level5" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 5 <i className="fa-solid fa-play"></i>
            </span>
          </a>
        </div>
      );
    };
    // if `showStartModal` state is true
    if (this.state.showStartModal) {
      return (
        //show level start modal
        <div className="modal-overlay">
          <Animated
            animationIn="bounceInUp"
            animationOut="bounceOut"
            isVisible={true}
          >
            <div className="modal-container">
              <div className="modal-title">
                <h2 className="title is-2 has-text-primary">
                  Welcome to Level C
                </h2>
              </div>
              <div className="modal-body">
                <div className="card custom-instruction hvr-grow-shadow">
                  <div className="card-image">
                    <figure className="image is-16by9">
                      <img
                        src="https://media1.giphy.com/media/Zy7s96dP38MlQe3OjG/giphy.gif"
                        alt="Placeholder"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="label">
                      Now you get to define the upper limit, lower limit and
                      size of the generated array{" "}
                      <span className="has-text-danger hvr-buzz">yourself</span>
                      . Experiment freely.
                    </div>
                  </div>
                </div>

                <div>
                  <div className="form-content">
                    <form>
                      <div className="field">
                        <div className="control">
                          <label className="label has-text-left has-text-light">
                            Number of Boxes
                          </label>
                          <input
                            type="number"
                            className="input"
                            name="boxCount"
                            value={this.state.boxCount}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <label className="label has-text-left has-text-light">
                            Lower Range
                          </label>
                          <input
                            type="number"
                            className="input"
                            name="lowerLimit"
                            value={this.state.lowerLimit}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <label className="label has-text-left has-text-light">
                            Upper Range
                          </label>
                          <input
                            type="number"
                            className="input"
                            name="upperLimit"
                            value={this.state.upperLimit}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <Link to="/ms/select">
                  <button className="modal-btn button is-primary hvr-sweep-to-left">
                    Select Another Level
                  </button>
                </Link>
                <button
                  className="modal-btn button is-primary hvr-pulse hvr-sweep-to-right"
                  onClick={this.startLevel}
                >
                  Begin Now!
                </button>
              </div>
            </div>
          </Animated>
        </div>
      );
      // if `showEndModal` state is true
    } else if (this.state.showEndModal && !this.state.showGameoverModal) {
      return (
        <EndModal
          title={this.state.level}
          life={this.state.lives}
          time={this.state.time}
          next="N/A"
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
  startLevel = () => {
    this.setState();
    //Store data from form
    let min = this.state.lowerLimit;
    let max = this.state.upperLimit;
    let arraySize = this.state.boxCount;
    size = arraySize;
    //Generate the array to be sorted
    let orderT = [];
    let splitOrd = [];

    const sorting = new MergeSort(min, max, arraySize);
    sorting.sort(sorting.getArray(), orderT, splitOrd, [], [], false);

    //Gather the inputed information and store
    this.setState({
      initialArr: sorting.getArray(),
      order: orderT,
      splitOrder: splitOrd,
    });

    this.setState({ showModal: false, showStartModal: false });
    // set current level
    global.auth.setCurrentLevel("C");
    // start timer
    this.startTimer();
  };

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
                level="C"
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
              {this.setState()}
              <Arrays
                array={this.state.initialArr}
                label="initial"
                order={this.state.splitOrder}
                initialSize={size}
                nextStep={this.handleNextStep}
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

export default withRouter(CustomLevel);
