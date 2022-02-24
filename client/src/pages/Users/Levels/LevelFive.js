import React from "react";
import LevelHeader from "components/LevelHeader";
import Modal from "components/Modal";
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
      //show modal when page loads
      showModal: true, 
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
}
export default LevelFive;
