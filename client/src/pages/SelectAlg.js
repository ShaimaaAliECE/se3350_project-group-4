import React from "react";

class SelectAlg extends React.Component {
  render() {
    return (
      <div className="alg-wrapper">
        <div className="alg-title">
          Hello
          <span> username</span>, Choose an algorithm to begin...
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>Hover me</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <p>
                  You can insert <strong>any type of content</strong> within the
                  dropdown menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectAlg;
