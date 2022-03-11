import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//Sounds
import RightSound from "assets/audios/RightSound.mp3";
import WrongSound from "assets/audios/WrongSound.mp3";
import CorrectAnswer from "assets/audios/CorrectAnswer.mp3";

//This will keep track of what step the player is on through out the entire level.
let step = 0;

const Arrays = (props) => {
  //Get array and prep block values and children
  let array = props.array;
  let order = props.order;
  let blockItems = [];
  let children = [];
  let right = ""

  const [buttonEnabled, setButtonState] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? array : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [winner, setWinner] = useState(false);

  function pushToMerged(value) {
    setMergedArray([...mergedArray, value]);
    console.log(mergedArray)
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

    right = array_right

    setChildArrays({
      leftArray: array_left,
      rightArray: array_right,
    });

    setIsMerging(true);
    splitting();
  }

  function selectValue(el) {
    let value = el.target.getAttribute("value");
    props.pushToMerged(value);
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

  function splitting() {
    if (mergedArray != null) {
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
        //SoundError(); //bad sound
        toast.error("INCORRECT", {autoClose:500});
      } else if (sorted) {
        // CorrectAnswer();
        //SoundSuccess()
        toast.success("CORRECT", {autoClose:500});
      }

      for (let i = 0; i < mergedArray.length; i++) {
        blockItems.push([
          <button onClick={selectValue} value={mergedArray[i]}>
            {mergedArray[i]}
          </button>,
        ]);
      }
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
              pushToMerged={pushToMerged}
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
              pushToMerged={pushToMerged}
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

export default Arrays