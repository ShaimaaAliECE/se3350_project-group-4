import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import Block from "components/Block";
import { toast } from "react-toastify";
import Modal from "components/Modal";
import "../../../css/LevelStyles.css";

import RightSound from "../../../assets/audios/RightSound.mp3";
import WrongSound from "../../../assets/audios/WrongSound.mp3";

toast.configure();
//LEVEL 3 must have a set of 10 numbers are randomly generated out of the range (1-20)
class LevelThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArr: [],
      splitting: true,
      step: 0,
      boxes: Array(11).fill(null),
      boxIndex: [1, 2, 4, 4, 5, 8, 9, 9, 5, 2, 3, 6, 6, 7, 10, 11, 11, 7, 3, 1],
      order: [],
      showModal: true,
    };
    this.generateArray = this.generateArray.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleMerge = this.handleMerge.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.PostiveNotify = this.PositiveNotify.bind(this);
    this.NegativeNotify = this.NegativeNotify.bind(this);
    this.PositiveSound = this.PositiveSound.bind(this);
    this.PositiveSound = this.PositiveSound.bind(this);
  }

  handleStart() {
    this.generateArray();
    this.setState({ showModal: false });
  }

  generateArray() {
    let split = [];
    let merge = [];
    let currentOrd = [];
    //min 1 max 20 arraysize 10
    var sorting = new MergeSort(1, 20, 10);
    sorting.sort(sorting.getArray(), currentOrd, false);

    this.setState({
      initialArr: sorting.getArray(),
      order: currentOrd,
    });
  }
  handleNextStep(e) {
    const box = this.state.boxes.slice();
    var step = this.state.step;
    const currentBox = this.state.boxIndex[step] - 1;
    box[currentBox] = this.state.order[step];
    console.log(box);
    step++;
    this.setState({
      boxes: box,
      step: step,
    });
  }

  componentDidMount() {
    this.generateArray();
  }
  //rendering block with the state of the box
  renderBlock(i) {
    return <Block value={this.state.boxes[i - 1]} />;
  }

  PositiveNotify() {
    toast.success("CORRECT!");
  }

  PositiveSound() {
    new Audio(RightSound).play();
  }

  NegativeNotify() {
    toast.error("INCORRECT");
  }

  NegativeSound() {
    new Audio(WrongSound).play();
  }

  render() {
    function choosePivot(e) {
      let pivot = this;
      console.log(pivot);
      
    }
    const modal_title = "Level 3";
    const modal_msg =
      "A set of 10 numbers are randomly generated out of the range (1-20). The steps of the algorithm are not displayed. Goodluck!";
    return (
      <div className="">
        <div className="header mb-6">
          <LevelHeader level="3" />
        </div>
        <div className="body">
          <div className="sort"></div>
          <div className="alg-steps">
            <div>
              <div className="box-surround">
                <div id="top">{this.renderBlock(1)}</div>
                <div id="second">
                  {this.renderBlock(2)}
                  {this.renderBlock(3)}
                </div>
                <div id="third">
                  {this.renderBlock(4)}
                  {this.renderBlock(5)}
                  {this.renderBlock(6)}
                  {this.renderBlock(7)}
                </div>
                <div id="third">
                  <Block />
                  <Block />
                  {this.renderBlock(8)}
                  {this.renderBlock(9)}
                  <Block />
                  <Block />
                  {this.renderBlock(10)}
                  {this.renderBlock(11)}
                </div>
                <div>
                  <NextButton
                    onClick={
                      (this.handleNextStep,
                      this.PositiveNotify,
                      this.PositiveSound)
                    }
                  />
                  <ResetButton onClick={this.handleReset} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function NextButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Next Step
    </button>
  );
}

function ResetButton(props) {
  return (
    <button className="button is-primary" onClick={props.onClick}>
      Reset
    </button>
  );
}

export default withRouter(LevelThree);
