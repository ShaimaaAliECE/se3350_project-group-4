import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import PopupMenu from "components/PopupMenu";
import CustomLevelForm from "pages/Admin/EditLevelForms/CustomLevelForm";

class CustomLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfBoxes: 0,
      upperLimit: 0,
      lowerLimit: 0,
      order: [],
    };
  }

  // mount popup form before level renders
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

    //Rerender by calling an empty setState
    this.setState();
  };

  render() {
    return (
      <div>
        <LevelHeader level="custom" />
        {/* show custom info */}
        <nav class="level has-text-light mt-3">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Number of Boxes</p>
              <p class="title has-text-danger">{this.state.numOfBoxes}</p>
            </div>
          </div>
         
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Lower Limit</p>
              <p class="title has-text-danger">{this.state.lowerLimit}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Upper Limit</p>
              <p class="title has-text-danger">{this.state.upperLimit}</p>
            </div>
          </div>
        </nav>
        <div className="level-wrapper">
          {/* level */}

          {this.state.order}
        </div>
      </div>
    );
  }
}

export default CustomLevel;
