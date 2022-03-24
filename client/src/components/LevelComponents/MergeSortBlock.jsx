import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Animated } from "react-animated-css";
//Sounds
import RightSound from "assets/audios/RightSound.mp3";
import WrongSound from "assets/audios/WrongSound.mp3";

let notified = false;

//This will keep track of what step the player is on through out the entire level.
let step = 0;
let sorted = true;

const Arrays = (props) => {
  const { handleGameover, handleEnd, order, nextStep, array } = props;
  //Get array and prep block values and children
  let blockItems = [];
  let children = [];
  let right = "";

  let outOfOrder = false;

  const [buttonEnabled, setButtonState] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [childArrays, setChildArrays] = useState();
  const [mergedArray, setMergedArray] = useState(array === 1 ? array : []);
  const [isMerging, setIsMerging] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [winner, setWinner] = useState(false);





  function pushToMerged(value) {
    outOfOrder = false;
    console.log("pushToMerged");
    console.log("child arrays");
    console.log(childArrays.leftArray);
    console.log(childArrays.rightArray);
    console.log("merged array");
    console.log(mergedArray);
    console.log("cumulative array");
    console.log(array);
    // console.log("Hello");

    for (let x = 0; x < array.length; x++) {
      console.log(array[x]);
    }

    if(mergedArray.length === 0){
      for (let x = 0; x < array.length; x++) {
        //iterate through the array
        if (value > parseInt(array[x])) { //compares value clicked to array(childarrays + merged)
          console.log("L"); //debugging
          outOfOrder = true;
        }
      }
    }
    else if(mergedArray.length !== 0){
      console.log(mergedArray[mergedArray.length-1]);
      if(parseInt(value) < mergedArray[mergedArray.length-1]){
        console.log("no good"); //debugging
        outOfOrder = true;
      }
    }
    
    if(outOfOrder === false){
      setMergedArray([...mergedArray, value]);
      console.log("fuck");
    }
    // console.log(mergedArray);
    return outOfOrder;
  }





  useEffect(() => {
    nextStep();
  }, [array, mergedArray]);

  function handleSplit() {
    console.log("handleSplit");
    notified = false;
    setIsSplit(!isSplit);
    step++;
    const middle = Math.floor(array.length / 2);
    const array_left = array.slice(0, middle);
    const array_right = array.slice(middle, array.length);
    if (array_left.length === 1 && array_right.length > 1) {
      props.nextStep();
    }
    right = array_right;
    setChildArrays({
      leftArray: array_left,
      rightArray: array_right,
    });
    setIsMerging(true);
    notification();
  }

  function selectValue(el) {
    notified = false;
    let value = el.target.getAttribute("value");
    let x = props.pushToMerged(value);
    if(!x){
      el.target.style.display = "none";
    }
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

  const ShowCorrectReaction = () => {
    new Audio(RightSound).play();
  };

  const ShowIncorrectReaction = () => {
    new Audio(WrongSound).play();
  };

  function notification() {
    if (mergedArray != null) {
      // let sorted = true;
      //array is sorted by default
      for (let x = 0; x < mergedArray.length - 1; x++) {
        //iterate through the array
        if (parseInt(mergedArray[x]) > parseInt(mergedArray[x + 1])) {
          //compares current and next value
          sorted = false; //array no longer sorted
          //console.log("L"); //debugging
          //console.log(mergedArray);
          //console.log(array);
        }
      }
      //external notifier function
      if (!sorted && !notified) {
        // console.log(mergedArray);
        // console.log("bad");
        toast.error("INCORRECT !", {
          autoClose: 300,
          closeButton: false,
          position: toast.POSITION.BOTTOM_CENTER,
          closeOnClick: true,
          onOpen: (props) => ShowIncorrectReaction(),
        });
        notified = true;
        if (global.auth.getCurrentHealth() > 0) {
          global.auth.decreaseHealth();
        }
      }
      if (sorted && !notified) {
        // CorrectAnswer();
        toast.success("CORRECT !", {
          autoClose: 300,
          closeButton: false,
          closeOnClick: true,
          position: toast.POSITION.BOTTOM_CENTER,
          onOpen: (props) => ShowCorrectReaction(),
        });
        notified = true;
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
        toast.success("WINNER");
        handleEnd();
        setWinner(!winner);
      } else if (!sorted) {
        console.log("Loser");
        console.log(mergedArray);
      }
    }
  }


  
    if (isMerging) {
      //console.log("isMerging")
      for (let i = 0; i < mergedArray.length; i++) {
        // console.log("hello");
        //console.log(childArrays);
        blockItems.push([
          <button
            className="level-block button is-light is-outlined is-focused"
            onClick={selectValue}
            key={mergedArray[i]}
            value={mergedArray[i]}
          >
            {mergedArray[i]}
          </button>,
        ]);
      }
      notification();
    }
  
    if (!isMerging) {
      //console.log("!isMerging")
      //add current arrays items into blocked elements
      for (let i = 0; i < array.length; i++) {
        let temp = true;
        if (array.length === 1) temp = false;
        blockItems.push([
          <button
            className="level-block button is-light is-outlined is-focused "
            disabled={temp}
            onClick={selectValue}
            key={array[i]}
            value={array[i]}
          >
            {array[i]}
          </button>,
        ]);
      }
    }
  
    if (!isMerged) {
      //console.log("!isMerged")
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
  


  //Allows for an override to let the Split button show no matter the evaluation
  function SplitButtonEnabler(array) {
    if (props.parentButton) {
      return true;
    } else {
      return checkSplitValidity(array);
    }
  }

  return (
    <Animated animationIn="fadeInDown" animationOut="bounceOut">
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
          <div
            className="button is-primary is-small is-outlined hvr-grow hvr-bubble-bottom"
            onClick={handleSplit}
          >
            <span className="icon is-small">
              <i className="fa-solid fa-scissors"></i>
            </span>
            <span className="has-text-weight-semibold">SPLIT</span>
          </div>
        </div>
        <div>{blockItems}</div>
        <br></br>
        <div key={children}>{children}</div>
      </div>
    </Animated>
  );
};

export default Arrays;
