import React from "react";
import ReactDOM from "react-dom";
import LevelHeader from "../../../components/LevelHeader";


class Level extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className="">
                    {/* header */}
                    <LevelHeader />
                </div>
                <div>
                    <label>
                        {/* {this.props.boxes} */}
                    </label>
                </div>
            </div>
        )
    }
}

class CustomLevel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numOfBoxes: 15,
            upperLimit: 50,
            lowerLimit: 0
        }
    }

    handleBoxes(event) {
        this.setState({numOfBoxes: event.target.value})
    }

    handleUpperLimit(event) {
        this.setState({upperLimit: event.target.value})
    }

    handleLowerLimit(event) {
        this.setState({lowerLimit: event.target.value})
    }

    startLevel(){
        ReactDOM.render(<Level 
            boxes = {this.state.numOfBoxes} 
            upLim = {this.state.upperLimit} 
            lowLim = {this.state.lowerLimit}/>, 
            document.getElementById('root'))
    }

    render() {
        return(
            <div>
                <div className="">
                    {/* header */}
                    <LevelHeader />
                </div>
                <form onSubmit={this.startLevel}>
                    <label>Number Of Boxes:
                        <input 
                        type="number"
                        min="3"
                        max="30"
                        value={this.state.numOfBoxes}
                        onChange={this.handleBoxes}
                        />
                    </label>
                    <label>Upper Limit:
                        <input
                        type="number"
                        value={this.state.upperLimit}
                        onChange={this.handleUpperLimit}
                        />
                    </label>
                    <label>Lower Limit:
                        <input
                        type="number"
                        value={this.state.lowerLimit} 
                        onChange={this.handleLowerLimit}
                        />
                    </label>
                <input type="submit" />
                </form>
            </div>  
        );
    
    }
}

export default CustomLevel
