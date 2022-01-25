import React from "react";
import { Link, withRouter } from "react-router-dom";
// import header area sub component
import LoginHeader from "../components/BackBtnHeader";

// Login Page
class Login extends React.Component {
  render() {
    return (
      <div>
        {/* header */}
        <LoginHeader />
        <div className="login-wrapper">
          <form className="login-box">
            <h4 className="title is-2 has-text-light">Login</h4>
            {/* username */}
            <div className="field">
              <label className="label has-text-white has-text-weight-light">
                Username
              </label>
              <div className="control">
                <input
                  className="input is-size-5 mb-2"
                  type="text"
                  placeholder="username"
                  name="username"
                />
              </div>
            </div>
            {/* password */}
            <div className="field mb-6">
              <label className="label has-text-white has-text-weight-light">
                Password
              </label>
              <div className="control">
                <input
                  className="input is-size-5"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>
            </div>
            {/* LOG In button */}
            <div className="control">
              <button className="button is-fullwidth is-primary has-text-weight-bold is-size-5">
                LOG IN
              </button>
            </div>
            {/* link to register */}
            <div className="label has-text-white has-text-weight-light has-text-centered mt-2">
              <Link to="/register">Don’t have an account? Register here</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
