import React, { useEffect, useState } from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Modal from "components/Modals/StartModal";
import "../../../css/LevelStyles.css";
import { Link, withRouter } from "react-router-dom";
import StepsScroller from "components/StepsScroller";
import { toast } from "react-toastify";
import RightSound from "assets/audios/RightSound.mp3";
import WrongSound from "assets/audios/WrongSound.mp3";
import CorrectAnswer from "assets/audios/CorrectAnswer.mp3";

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
      showModal: true, //show modal when page loads
      win: false,
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  // execute when start on the modal is pressed
  handleStart() {
    this.generateArray();
    this.setState({ showModal: false });
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

  handleEnd() {
    this.setState({ showModal: false });
  }

  render() {
    // modal content
    const modal_title = "Level 2";
    const modal_msg =
      "A set of 10 numbers are randomly generated out of the range (1-20). The steps of the algorithm are displayed in the text allowing the user to move the numbers according to the current step.";
    const modal_title_win = "Level 2 Complete";
    const modal_msg_win = "Congrats! You Win!";
    /*return (
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
            <div>
              <Arrays array={this.state.initialArr} label="initial" />
            </div>
          </div>
        )}
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
            <div>
              <Arrays array={this.state.initialArr} label="initial" order = {this.state.order}/>
            </div>
          </div>
        )}
      </div>
    );*/
    if (this.state.showModal === true) {
      return (
        <div>
          <Modal
            handleStart={this.handleStart}
            title={modal_title}
            text={modal_msg}
          />
        </div>
      );
    } else if (this.state.showModal === false) {
      return (
        <div>
          <div className="header mb-6">
            <LevelHeader level="2" />
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
      );
    } else if (this.state.showModal === true && this.state.win === true) {
      return (
        <div>
          <Modal
            handleStart={this.handleEnd}
            title={modal_title_win}
            text={modal_msg_win}
          />
        </div>
      );
    }
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
