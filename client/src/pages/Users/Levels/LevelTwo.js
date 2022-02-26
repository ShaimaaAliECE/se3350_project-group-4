import React, { useEffect, useState } from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import "../../../css/LevelStyles.css";
import { withRouter } from "react-router-dom";
import StepsScroller from "components/StepsScroller";
import { toast } from "react-toastify";
import RightSound from "assets/audios/RightSound.mp3";
import WrongSound from "assets/audios/WrongSound.mp3";
import CorrectAnswer from "assets/audios/CorrectAnswer.mp3";
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";

toast.configure();
class LevelTwo extends React.Component {
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
      level: 2,
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
              Start Level 1 <i class="fa-solid fa-play"></i>
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
              <LevelHeader level="2" />
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
                order={this.state.splitOrder}
                nextStep={this.handleNextStep}
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

//This will keep track of what step the player is on through out the entire level.
let step = 0;

function Arrays(props) {
  //Get array and prep block values and children
  let array = props.array;
  let order = props.order;
  let blockItems = [];
  let children = [];

  const [buttonEnabled, setButtonState] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? [...array] : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [winner, setWinner] = useState(false);
  const [right, setRight] = useState();
  const [steped, setSteped] = useState(false);

  function pushToMerged(value) {
    setMergedArray([...mergedArray, value]);
  }

  useEffect(() => {
    props.nextStep();
  }, [array.length, array.length == mergedArray.length, array.length == 1]);

  function handleSplit() {
    setIsSplit(!isSplit);
    step++;

    const middle = Math.floor(array.length / 2);
    const array_left = array.slice(0, middle);
    const array_right = array.slice(middle, array.length);

    if (array_left.length == 1 && array_right.length > 1) {
      props.nextStep();
    }

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

  function CorrectAnswer() {
    new Audio(CorrectAnswer).play();
  }

  //Called from checkSplitValidity, checks the rest of the arrays to enable Split.
  function evaluateOtherSplit(condition) {
    //Check if the child array on the right is now allowed to be split.
    if (right.toString() === condition) {
      //Set the override for the Split button, this will show the button regardless of the step.
      setButtonState(true);
    } else {
      //If the condition is not met, check if a parent exists, and pass this function through again.
      if (array.length !== 10) {
        props.evaluateOtherSplit(condition);
      }
    }
    //No need to return anything, either the screen is updated by the override, or there is no change required.
  }

  //Function to make sure user can only split one array at a time
  function checkSplitValidity(array) {
    //Check if the array in question is the next array in the given order.
    if (array.toString().indexOf(order[step]) !== -1) {
      return true;
    } else {
      //Check if a parent exists, if so, check if other arrays are next in the order.
      if (array.length !== 10) {
        props.evaluateOtherSplit(order[step]);
      }
      //If the next array in order is not found, return false and show no Split buttons.
      return false;
    }
  }

  if (isMerging) {
    if (mergedArray != null) {
      /*
      let sorted = true;
      console.log(mergedArray[mergedArray.length-2]);
      console.log(mergedArray[mergedArray.length-1]);
      if (mergedArray[mergedArray.length-1] > mergedArray[mergedArray.length-2]) {
        sorted = false;
        //if(!sorted){
        //  console.log("bad");
          //console.log(mergedArray);
          //}
      }
      */
      let sorted = true; //array is sorted by default
      for (let x = 0; x < mergedArray.length - 1; x++) {
        //iterate through the array
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x + 1])) {
          //compares current and next value
          sorted = false; //array no longer sorted
          console.log("L"); //debugging
          console.log(mergedArray);
          console.log(array);
        }
      }

      if (!sorted) {
        console.log(mergedArray);
        console.log("bad");
        SoundError(); //bad sound
        toast.error("INCORRECT");
      } else if (sorted) {
        console.log("nice");
        toast.success("CORRECT");
        CorrectAnswer();
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
        //goes through array
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x + 1])) {
          //checks if unsorted
          sorted = false;
        }
      }
      if (sorted) {
        //if sorted
        console.log("Winner");
        SoundSuccess(); //nice sound
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
              nextStep={props.nextStep}
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
              nextStep={props.nextStep}
            />
          </div>
        </div>
      );
    }
  }

  //Allows for an override to let the Split button show no matter the evalutaion
  function SplitButtonEnabler(array) {
    if (props.parentButton) {
      return true;
    } else {
      return checkSplitValidity(array);
    }
  }

  return (
    <div className="initial">
      <div
        // null, shows the Split button, disappear hides the button
        // isSplit checks if the button was pressed
        // array.length > 1 checks if the array being displayed isnt a single number
        // SplitButtonEnabler is a function that checks for the next valid place for the split button,
        //     or if the override is enabled.
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

export default withRouter(LevelTwo);
