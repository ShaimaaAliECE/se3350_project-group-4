import React from "react";
import {Link} from "react-router-dom"

//Utility bar component
class AnalyticsToolBar extends React.Component {
  //search bar input state
  state = {
    searchText: "",
  };

  //handles changes to the search bar
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };

  //empty search bar
  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };


  //JFX
  render() {
    return (
      <div className="tool-box">
        {/* logo */}
        <div className="logo-text">
            <i class="fas fa-chart-bar"></i> Analytics
        </div>
        {/* search bar */}
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search by username or rank..."
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
            {/* clear button */}
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                X
              </button>
            </div>
          </div>
        </div>
        {/* level select */}
        <div to="/edit" className="cart-box">
        <span className="cart-num">Back</span>
        <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    );
  }
}

export default AnalyticsToolBar;
