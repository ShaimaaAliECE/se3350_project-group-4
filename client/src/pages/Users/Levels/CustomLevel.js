import React from "react";
import Modal from "react-modal";
import LevelHeader from "components/LevelHeader";
import MergeSort from "algorithms/mergeSort.mjs";

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
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    //Show modal (called before the first render of the page)
    this.setState({ showModal: true });
  }

  startLevel = (event) => {
    //Gather the inputed information and store
    this.setState({
      numOfBoxes: event.target[0].value,
      upperLimit: event.target[1].value,
      lowerLimit: event.target[2].value,
      showModal: false,
    });

    //Generate the array to be sorted
    let orderT = []
    console.log(event.target[2].value, event.target[1].value, event.target[0].value)
    var sorting = new MergeSort(event.target[2].value, event.target[1].value, event.target[0].value)
    sorting.sort(sorting.getArray(), orderT, [], false)

    console.log(orderT)

    //Save the order of the completion of the algorithm
    this.setState({order: orderT})

    //Rerender by calling an empty setState
    this.setState();
  };

  componentDidMount() {
    //Open modal upon successful deployment
    this.handleOpenModal();
  }

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
        {/* Modal, contains the form to collect information for the custom level */}
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
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
        </Modal>
      </div>
    );
  }
}

export default CustomLevel;
