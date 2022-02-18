import React, { useEffect, useState } from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Modal from "components/Modal";
import "../../../css/LevelStyles.css";
import { Link, withRouter } from "react-router-dom";

import { toast } from "react-toastify";
import RightSound from 'assets/audios/RightSound.mp3';
import WrongSound from 'assets/audios/WrongSound.mp3';

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
    this.checkCorrect = this.checkCorrect.bind(this);
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

  checkCorrect(arr) {}

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
              step={0}
              order={this.state.splitOrder}
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

function Arrays(props) {
  //Get array and prep block values and children
  let array = props.array;
  let order = props.order;
  let blockItems = [];
  let children = [];

  //console.log(array.length);

  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? [...array] : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [winner, setWinner] = useState(false);
  const [step, setStep] = useState(props.step);
  const [right, setRight] = useState();


  function pushToMerged(value) {
    setMergedArray([...mergedArray, value]);
  }

  useEffect(() => {
    console.log("array changed");
  }, [array]);

  function handleSplit() {
    setIsSplit(!isSplit);
    setStep(step + 1);

    const middle = Math.floor(array.length / 2);
    const array_left = array.slice(0, middle);
    const array_right = array.slice(middle, array.length);

    setRight(array_right)

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

  function evaluateOtherSplit(condition) {
    console.log("Evaluating: " + right + " to " + condition)
    if (right === condition){
      console.log("Found a match: " + right + " and " + condition)
    } else {
      if (array.length !== 10){
        props.evaluateOtherSplit(condition)
      } else {
        console.log("Nothing Found")
      }
    }
  }
    
  function SoundSuccess(){
    new Audio(RightSound).play();
  }

  function SoundError(){
    new Audio(WrongSound).play();
  }

  //Function to make sure user can only split one array at a time
  function checkSplitValidity(array) {
    if (array.toString().indexOf(order[step]) !== -1) {
      return true
    } else {
      if (array.length !== 10) {
        props.evaluateOtherSplit(order[step])
      }
      return false
    }
  }

  if (isMerging) {
    if (mergedArray != null) {
      let sorted = true;
      for (let x = 0; x < mergedArray.length - 1; x++) {
        //let sorted = true;
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x+1])) {
          sorted = false;
          if(!sorted){
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
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x+1])) {
          sorted = false;
          if(!sorted){
            console.log("Loser");
            console.log(mergedArray);
            }
        }
      }
      if(sorted){
        console.log("Winner");
        SoundSuccess();
        toast.success("WINNER");
        setWinner(!winner);
      }
      else if(!sorted){
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
              step={step}
              pushToMerge={pushToMerged}
              evaluateOtherSplit={evaluateOtherSplit}
            />
          </div>
          <div className="right">
            <Arrays
              array={childArrays.rightArray}
              label="Right Array"
              order={order}
              step={step}
              pushToMerge={pushToMerged}
              evaluateOtherSplit={evaluateOtherSplit}
            />
          </div>
        </div>
      );
    }
  }
  //${checkSplitValidity(array) ? null : "disappear"}`} should go after line '${array.length > 1 ? null : "disappear"} +'
  return (
    <div className="initial">
      <div
        className={`${!isSplit ? null : "disappear"} + 
        ${array.length > 1 ? null : "disappear"}`}
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
