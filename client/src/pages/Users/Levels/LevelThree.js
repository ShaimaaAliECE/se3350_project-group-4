import React, { useEffect, useState } from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Modal from "components/Modals/StartModal";
import "../../../css/LevelStyles.css";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import RightSound from "assets/audios/RightSound.mp3";
import WrongSound from "assets/audios/WrongSound.mp3";
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
      higherLimit: 20,
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
              Start Level 1 <i class="fa-solid fa-play"></i>
            </span>
          </a>
          <a href="/ms/level2" className="dropdown-item">
            <span className="label has-text-centered">
              Start Level 2 <i class="fa-solid fa-play"></i>
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
          higherLimit={this.state.higherLimit}
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
          level="3"
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
            <div>
              <Arrays
                array={this.state.initialArr}
                label="initial"
                step={0}
                order={this.state.splitOrder}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

let step = 0;

function Arrays(props) {
  //Get array and prep block values and children
  let array = props.array;
  let order = props.order;
  let blockItems = [];
  let children = [];

  //console.log(array.length);

  const [buttonEnabled, setButtonState] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? [...array] : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [winner, setWinner] = useState(false);
  const [right, setRight] = useState();

  function pushToMerged(value) {
    setMergedArray([...mergedArray, value]);
  }

  useEffect(() => {}, [array]);

  function handleSplit() {
    setIsSplit(!isSplit);
    step++;

    const middle = Math.floor(array.length / 2);
    const array_left = array.slice(0, middle);
    const array_right = array.slice(middle, array.length);

    setRight(array_right);

    setChildArrays({
      leftArray: array_left,
      rightArray: array_right,
    });

    setIsMerging(true);
  }

  function selectValue(el) {
    let value = el.target.getAttribute("value");
    props.pushToMerge(value);
    el.target.style.display = "none";
  }

  function SoundSuccess() {
    new Audio(RightSound).play();
  }

  function SoundError() {
    new Audio(WrongSound).play();
  }

  function evaluateOtherSplit(condition) {
    // console.log("Evaluating: " + right + " to " + condition)

    if (right.toString() === condition) {
      // console.log("Found a match: " + right + " and " + condition)
      setButtonState(true);
    } else {
      if (array.length !== 10) {
        props.evaluateOtherSplit(condition);
      } else {
        // console.log("Nothing Found")
      }
    }
  }

  //Function to make sure user can only split one array at a time
  function checkSplitValidity(array) {
    // console.log(step)
    // console.log(order[step])
    // console.log(array)
    if (array.toString().indexOf(order[step]) !== -1) {
      return true;
    } else {
      if (array.length !== 10) {
        props.evaluateOtherSplit(order[step]);
      }
      return false;
    }
  }

  if (isMerging) {
    if (mergedArray != null) {
      let sorted = true;
      for (let x = 0; x < mergedArray.length - 1; x++) {
        //let sorted = true;
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x + 1])) {
          sorted = false;
          if (!sorted) {
            console.log("bad");
            console.log(mergedArray);
          }
        }
      }
      if (!sorted) {
        console.log("bad");
        SoundError();
        toast.error("INCORRECT");
      }

      for (let i = 0; i < mergedArray.length; i++) {
        blockItems.push([
          <button onClick={selectValue} value={mergedArray[i]}>
            {mergedArray[i]}
          </button>,
        ]);
      }
    }
    //merging is done if merged array length = original array length
    if (mergedArray.length === 10) {
      console.log("merging completed");
      setIsMerged(isMerged);
      setIsMerging(!isMerging);
      let sorted = true;
      for (let x = 0; x < mergedArray.length - 1; x++) {
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x + 1])) {
          sorted = false;
          if (!sorted) {
            console.log("Loser");
            console.log(mergedArray);
          }
        }
      }
      if (sorted) {
        console.log("Winner");
        SoundSuccess();
        toast.success("WINNER");
        setWinner(!winner);
      } else if (!sorted) {
        console.log("Loser");
        console.log(mergedArray);
      }
    }
  }

  if (!isMerging) {
    //add current arrays items into blocked elements
    for (let i = 0; i < array.length; i++) {
      let temp = true;
      if (array.length === 1) temp = false;
      blockItems.push([
        <button disabled={temp} onClick={selectValue} value={array[i]}>
          {array[i]}
        </button>,
      ]);
    }
  }

  if (!isMerged) {
    if (childArrays !== undefined) {
      children = (
        <div className="split">
          <div className="left">
            <Arrays
              array={childArrays.leftArray}
              label="Left Array"
              order={order}
              pushToMerge={pushToMerged}
              evaluateOtherSplit={evaluateOtherSplit}
              setButtonState={buttonEnabled}
            />
          </div>
          <div className="right">
            <Arrays
              array={childArrays.rightArray}
              label="Right Array"
              order={order}
              pushToMerge={pushToMerged}
              evaluateOtherSplit={evaluateOtherSplit}
              parentButton={buttonEnabled}
            />
          </div>
        </div>
      );
    }
  }

  function SplitButtonEnabler(array) {
    if (props.parentButton) {
      return true;
    } else {
      return checkSplitValidity(array);
    }
  }

  //${checkSplitValidity(array) ? null : "disappear"}`} should go after line '${array.length > 1 ? null : "disappear"} +'
  return (
    <div className="initial">
      <div
        className={`${!isSplit ? null : "disappear"} + 
        ${array.length > 1 ? null : "disappear"} +
        ${SplitButtonEnabler(array) ? null : "disappear"}`}
      >
        <button onClick={handleSplit}>Split</button>
      </div>
      <div>{blockItems}</div>
      <br></br>
      <div>{children}</div>
    </div>
  );
}

export default withRouter(LevelThree);
