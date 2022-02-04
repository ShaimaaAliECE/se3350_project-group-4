import React from "react";
import Modal from "react-modal";
import LevelHeader from "../../../components/LevelHeader";

class CustomLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfBoxes: 15,
      upperLimit: 50,
      lowerLimit: 0,
      showModal: true,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  startLevel = (event) => {
    this.setState({
      numOfBoxes: event.target[0].value,
      upperLimit: event.target[1].value,
      lowerLimit: event.target[2].value,
      showModal: false,
    });
    this.setState();
  };

  componentDidMount() {
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
          </div>
        </div>
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
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
