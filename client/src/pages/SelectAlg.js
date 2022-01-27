import React from "react";
import { Link, withRouter } from "react-router-dom";

class SelectAlg extends React.Component {
  render() {
    return (
      <div className="alg-wrapper">
        <div className="section">
          {/*  */}
          <div className="title label has-text-light">
            <span>Hello </span>
            <span className="has-text-primary">username</span>,
            <div>Choose an algorithm to begin...</div>
          </div>
          {/* dropdown */}
          <div class="dropdown is-hoverable">
            {/* dropdown box */}
            <div class="dropdown-trigger">
              {/* dropdown button */}
              <button
                className="button is-large  is-rounded has-background-primary"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                {/* text */}
                <span className="has-text-weight-semibold">
                  Select from dropdown
                </span>
                {/* arrow icon */}
                <span className="icon is-small is-justify-content-flex-end">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            {/* dropdown menu */}
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <Link to="/select">
                  <div className="dropdown-item">
                    <span className="dropdown-text">Merge Sort</span>
                  </div>
                </Link>
                <hr class="dropdown-divider"></hr>
                <Link to="/login">
                  <div className="dropdown-item">
                    <span className="dropdown-text">Merge Sort</span>
                  </div>
                </Link>
                <hr class="dropdown-divider"></hr>
                <Link to="/login">
                  <div className="dropdown-item">
                    <span className="dropdown-text">Merge Sort</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SelectAlg);
