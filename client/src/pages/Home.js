import React from "react";
import { Link, withRouter } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        {/* header section */}
        <div className="header-box section has-background-primary">
          <div className="title is-italic has-text-weight-bold">
            Learning Algorithm
          </div>
          <div className="subtitle is-italic">3350 Gamified Web App</div>
        </div>
        {/* button group */}
        <div className="btns buttons are-large is-centered">
          {/* login button */}
          <Link to="/login">
            <button class="btn button is-primary has-text-weight-semibold">
              <span class="icon">
                <i class="fas fa-user-circle"></i>
              </span>
              <span>LOGIN</span>
            </button>
          </Link>
          {/* register button */}
          <Link to="/register">
            <button class="btn button is-primary has-text-weight-semibold">
              <span class="icon">
                <i class="fas fa-user-plus"></i>
              </span>
              <span>REGISTER</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
