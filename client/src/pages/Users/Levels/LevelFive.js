import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import { withRouter } from "react-router-dom";
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";
import { toast } from "react-toastify";

toast.configure();

class LevelFive extends React.Component {
  constructor(props) {
    super(props);
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
      lives: 3,
      time: 0,
      lowerLimit: 1,
      upperLimit: 50,
      boxCount: 20,
    };
    this.generateArray = this.generateArray.bind(this);
    // this.handleNextStep = this.handleNextStep.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    // this.checkCorrect = this.checkCorrect.bind(this);
    this.handleGameover = this.handleGameover.bind(this);
  }

  //** Modal Related functions **/
  // execute when start on the modal is pressed
  handleStart() {
    // generate new array
    // this.generateArray();
    // hide start modal
    this.setState({ showModal: false, showStartModal: false });
    // start timer
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
              Start Level 1 <i class="fa-solid fa-play"></i>
            </span>
          </a>
          <a href="/ms/level2" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 2 <i class="fa-solid fa-play"></i>
            </span>
          </a>
          <a href="/ms/level3" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 3 <i class="fa-solid fa-play"></i>
            </span>
          </a>
          <a href="/ms/level4" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 4 <i class="fa-solid fa-play"></i>
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
          next="Level C"
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
    var sorting = new MergeSort(1, 50, 20);

    sorting.sort(sorting.getArray(), currentOrd, splitOrd, currentInstr, false);
    //retrieves array of instructions and order of steps
    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
      splitOrder: splitOrd,
      instructions: currentInstr,
    });
  }

  render() {
    return (
      <div>
        {this.state.showModal ? (
          this.renderModal()
        ) : (
          <div>
            <div className="header mb-6">
              <LevelHeader level="5" />
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
            <div>Level 4</div>
          </div>
        )}
      </div>
    );
  }
}


export default withRouter(LevelFive);
