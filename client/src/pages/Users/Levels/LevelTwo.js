import React, { useEffect, useState } from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/Block";
import StepsScroller from "components/StepsScroller";
import Modal from "components/Modal";
import { Link, withRouter } from "react-router-dom";
import "../../../css/LevelStyles.css";

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 0,
      instructions: [],
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
      showModal: true, //show modal when page loads
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
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
    // Create array using given algorithm class
    var sorting = new MergeSort(1, 20, 10);

    sorting.sort(sorting.getArray(), currentOrd, currentInstr, false);
    //retrieves array of instructions and order of steps
    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
      instructions: currentInstr,
    });
  }

  //sets order
  setOrder(val) {
    this.setState({ order: val });
  }

  //reset button handling
  handleReset(e) {
    const box = Array(11).fill(null);
    let step = 0;
    this.setState({
      step: step,
      boxes: box,
      lineOne: null,
      lineTwo: null,
      lineThree: null,
    });
  }

  //handles next step
  handleNextStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step; //block order to retrieve
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];

    step++;
    this.setState({
      boxes: box,
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
    // modal content
    const modal_title = "Level 2";
    const modal_msg =
      "A set of 10 numbers are randomly generated out of the range (1-20). The steps of the algorithm are displayed in the text allowing the user to move the numbers according to the current step.";
    return (
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
      </div>
    );
  }
}

function Arrays(props) {
  //Get array and prep block values and children
  let array = props.array;
  let blockItems = [];
  let children = [];

  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? [...array] : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);

  function pushToMerged(value) {
    setMergedArray([...mergedArray, value]);
  }

  useEffect(() => {
    console.log("array changed");
  }, [array]);

  function handleSplit() {
    setIsSplit(!isSplit);

    const middle = Math.floor(array.length / 2);
    const array_left = array.slice(0, middle);
    const array_right = array.slice(middle, array.length);

    setChildArrays({
      leftArray: array_left,
      rightArray: array_right,
    });

    setIsSplit(!isSplit);
    setIsMerging(true);
  }

  function selectValue(el) {
    let value = el.target.getAttribute("value");
    props.pushToMerge(value);
    el.target.style.display = "none";
  }

  if (isMerging) {
    if (mergedArray != null) {
      for (let i = 0; i < mergedArray.length; i++) {
        blockItems.push([
          <button onClick={selectValue} value={mergedArray[i]}>
            {mergedArray[i]}
          </button>,
        ]);
      }
    }
    //merging is done if merged array length = original array length
    if (mergedArray.length === array.length) {
      console.log("merging completed");
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
              pushToMerge={pushToMerged}
            />
          </div>
          <div className="right">
            <Arrays
              array={childArrays.rightArray}
              label="Right Array"
              pushToMerge={pushToMerged}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="initial">
      <div
        className={`${!isSplit ? null : "disappear"} + ${
          array.length > 1 ? null : "disappear"
        }`}
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