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

        {/* toggle chart */}
        <div>
          <div
            className="button is-primary is-outlined hvr-grow "
            onClick={this.props.handleShowChart}
          >
            {this.props.showChart === true ? (
              <div>
                <span className="icon is-small">
                  <i className="fa-solid fa-eye"></i>
                </span>
                <strong>Chart: Visible</strong>
              </div>
            ) : (
              <div>
                <span className="icon is-small">
                  <i className="fa-solid fa-eye-slash"></i>
                </span>
                <strong>Chart: Hidden</strong>
              </div>
            )}
          </div>
        </div>

        {/* Sort drop down */}
        <div className="dropdown is-hoverable ">
          <div className="dropdown-trigger">
            <button
              className="button is-outlined is-primary"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <strong>Sort By</strong>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <button
                className="dropdown-item button"
                onClick={this.props.sortName}
              >
                <p className="label">Username ( a {"-->"} z )</p>
              </button>
              <button
                className="dropdown-item button"
                onClick={this.props.sortTime}
              >
                <p className="label">Time ( fast {"-->"} slow )</p>
              </button>
              <button
                className="dropdown-item button"
                onClick={this.props.sortAccuracy}
              >
                <p className="label">Accuracy ( high {"-->"} low )</p>
              </button>
              <button
                className="dropdown-item button"
                onClick={this.props.sortDate}
              >
                <p className="label">Date ( new {"-->"} old )</p>
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
