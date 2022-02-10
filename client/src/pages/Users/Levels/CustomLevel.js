import React from "react";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";
import PopupMenu from "components/PopupMenu";
import CustomLevelForm from "pages/Admin/EditLevelForms/CustomLevelForm";

class CustomLevel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfBoxes: 15,
      upperLimit: 50,
      lowerLimit: 0,
      showModal: true,
      order: []
    };
  }

  // mount popup form before level renders
  componentDidMount() {
    PopupMenu.open({
      component: CustomLevelForm,
      callback: (data) => {
        //console.log(data);
      },
    });
    
  }


  startLevel = (event) => {
    //Store data from form
    let min = event.target[2].value
    let max = event.target[1].value
    let arraySize = event.target[0].value

    //Generate the array to be sorted
    let orderT = []
    let instructions = []

    const sorting = new MergeSort(min / 10, max, arraySize)
    sorting.sort(sorting.getArray(), orderT, instructions, false)

    //Gather the inputed information and store
    this.setState({
      numOfBoxes: arraySize,
      upperLimit: max,
      lowerLimit: min,
      showModal: false,
      order: orderT
    });

    //Rerender by calling an empty setState
    this.setState();
  };



  render() {
    return (
      <div>
        <div>
          <div className="">
            {/* header */}
            <LevelHeader level="custom" />
          </div>
          <div className="level">
            {/* level */}
            {this.state.numOfBoxes}
            {this.state.upperLimit}
            {this.state.lowerLimit}
            <br></br>
            {this.state.order}
          </div>
        </div>
      </div>
    );
  }
}

export default CustomLevel;
