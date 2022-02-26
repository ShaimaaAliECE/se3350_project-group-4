import React from "react";
import LevelHeader from "components/LevelComponents/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import PopupMenu from "components/PopupMenu";
import CustomLevelForm from "pages/Admin/EditLevelForms/CustomLevelForm";
import { withRouter } from "react-router-dom";
// modals
import StartModal from "components/Modals/StartModal";
import GameoverModal from "components/Modals/GameoverModal";
import EndModal from "components/Modals/EndModal";

class CustomLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      //must be >= 3
      boxCount: 3,
      
      //must be >= 5
      upperLimit: 5,
      
      //must be = 0 
      lowerLimit: 0,
      
      order: [],
      // ------ Modal States ----- //
      showModal: true, //enable modal rendering
      showStartModal: true, //show start level modal by default
      showEndModal: false, //dont show endModal by default
      showGameoverModal: false, //dont show gameover Modal by default

      // ----- Game State ----- //
      level: 4,
      lives: 3,
      time: 0,
      lowerLimit: 1, lowerLimit: 0,
      
      upperLimit: 20, //must be >= 5
      boxCount: 10,
    };
  }

  //Mount popup form before level renders
  componentDidMount() {
    PopupMenu.open({
      component: CustomLevelForm,
      callback: (data) => {
        this.setState({
          numOfBoxes: data.boxCount,
          upperLimit: data.upperRange,
          lowerLimit: data.lowerRange,
        });
      },
    });
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
        <LevelHeader level="custom" />
        {/* show custom info */}
        <nav className="level has-text-light mt-3">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Number of Boxes</p>
              <p className="title has-text-danger">{this.state.numOfBoxes}</p>
            </div>
          </div>
         
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Lower Limit</p>
              <p className="title has-text-danger">{this.state.lowerLimit}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Upper Limit</p>
              <p className="title has-text-danger">{this.state.upperLimit}</p>
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
          <form onSubmit={this.startLevel}>
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
          </form>
      </div>
    );
  }
}

export default withRouter(CustomLevel);
