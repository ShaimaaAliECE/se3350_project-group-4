import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";

import { withRouter, Link } from "react-router-dom";
import { Animated } from "react-animated-css";
// modals
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";

class CustomLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      // ------ Modal States ----- //
      showModal: true, //enable modal rendering
      showStartModal: true, //show start level modal by default
      showEndModal: false, //dont show endModal by default
      showGameoverModal: false, //dont show gameover Modal by default

      // ----- Game State ----- //
      level: "C",
      lives: 3,
      time: 0,
      lowerLimit: 1, //must be = 0
      upperLimit: 20, //must be >= 5
      boxCount: 3,
    };

    // this.generateArray = this.generateArray.bind(this);
    // this.handleNextStep = this.handleNextStep.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    // this.checkCorrect = this.checkCorrect.bind(this);
    this.handleGameover = this.handleGameover.bind(this);
  }

  //Mount popup form before level renders
  // componentDidMount() {
  //   PopupMenu.open({
  //     component: CustomLevelForm,
  //     callback: (data) => {
  //       this.setState({
  //         numOfBoxes: data.boxCount,
  //         upperLimit: data.upperRange,
  //         lowerLimit: data.lowerRange,
  //       });
  //     },
  //   });
  // }

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

  // retrieve info from form
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

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
                      Now you get to defined the upper limit, lower limit and
                      size of the generated array{" "}
                      <span className="has-text-danger hvr-buzz">yourself</span>.
                      Experiment freely.
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
                  onClick={this.handleStart}
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

  startLevel = (event) => {
    //Store data from form
    let min = event.target[2].value;
    let max = event.target[1].value;
    let arraySize = event.target[0].value;

    //Generate the array to be sorted
    let orderT = [];
    let instructions = [];

    const sorting = new MergeSort(min / 10, max, arraySize);
    sorting.sort(sorting.getArray(), orderT, instructions, false);

    //Gather the inputed information and store
    this.setState({
      numOfBoxes: arraySize,
      upperLimit: max,
      lowerLimit: min,
      order: orderT,
    });

    //Re-render by calling an empty setState
    this.setState();
  };

  render() {
    return (
      <div>
        {this.state.showModal ? (
          this.renderModal()
        ) : (
          <div>
            <div>
              <LevelHeader level="custom" />
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
              {/* show custom level info */}
              <nav className="level has-text-light mt-3">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Number of Boxes</p>
                    <p className="title has-text-danger">
                      {this.state.boxCount}
                    </p>
                  </div>
                </div>

                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Lower Limit</p>
                    <p className="title has-text-danger">
                      {this.state.lowerLimit}
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Upper Limit</p>
                    <p className="title has-text-danger">
                      {this.state.upperLimit}
                    </p>
                  </div>
                </div>
              </nav>
              <div className="level-wrapper">
                {/* level */}

                {this.state.order}
              </div>
              {/* Modal, contains the form to collect information for the custom level */}
              {/* <Modal isOpen={this.state.showModal} ariaHideApp={false}> */}
              {/* Call startLevel on the submission of the form */}
              {/* <form onSubmit={this.startLevel}>
          <label>
            Number Of Boxes:
            <input
              type="number"
              min="3"
              max="30"
              defaultValue={this.state.numOfBoxes}
              name="nbox"
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Upper Limit:
            <input
              type="number"
              max="1000"
              min="5"
              defaultValue={this.state.upperLimit}
              name="ulim"
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Lower Limit:
            <input
              type="number"
              max={this.state.upperLimit}
              min="0"
              defaultValue={this.state.lowerLimit}
              name="llim"
            />
          </label>
          <br></br>
          <br></br>
          <input type="Submit" />
        </form> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(CustomLevel);
