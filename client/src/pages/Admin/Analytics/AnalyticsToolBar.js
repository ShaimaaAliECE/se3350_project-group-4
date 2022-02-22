import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

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
      <div className="tool-box mb-3">
        {/* logo */}
        <div className="logo-text">
          <i className="fas fa-chart-bar"></i> Analytics
        </div>

        {/* search bar */}
        <Animated
          animationIn="bounceInDown"
          animationOut="bounce"
          isVisible={true}
        >
          <div className="search-box">
            <div className="field has-addons">
              <div className="control">
                <input
                  type="text"
                  className="input search-input"
                  placeholder="Search for a user by their username.."
                  value={this.state.searchText}
                  onChange={this.handleChange}
                />
              </div>
              {/* clear button */}
              <div className="control">
                <button
                  className="button is-danger"
                  onClick={this.clearSearchText}
                >
                  <i className="fas fa-eraser"></i>
                </button>
              </div>
            </div>
          </div>
        </Animated>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button is-outlined is-primary"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <strong>Sort By</strong>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <button class="dropdown-item button" onClick={this.props.sortName}>
                <p className="label">Username ( a - z )</p>
              </button>
              <button class="dropdown-item button" onClick={this.props.sortTime}>
                <p className="label">Time ( fast - slow )</p>
              </button>
              <button class="dropdown-item button" onClick={this.props.sortAccuracy}>
                <p className="label">Accuracy ( high - low )</p>
              </button>
            </div>
          </div>
        </div>
        {/* level select */}
        <Link to="/ms/edit" className="quit-box hvr-skew-forward">
          <span className="cart-num">Back</span>
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </div>
    );
  }
}

export default AnalyticsToolBar;
