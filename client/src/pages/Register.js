import React from "react";
import { Link, withRouter } from "react-router-dom";
// import header area sub component
import RegisterHeader from "../components/BackBtnHeader";

// Register Page
class Register extends React.Component {
  render() {
    return (
      <div>
        {/* header */}
        <RegisterHeader />
        <div className="login-wrapper">
          <form className="login-box">
            <h4 className="title is-2 has-text-light">Create Account</h4>
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
            <div className="field">
              <label className="label has-text-white has-text-weight-light">
                Password
              </label>
              <div className="control">
                <input
                  className="input is-size-5 mb-2"
                  type="password"
                  placeholder="password"
                  name="username"
                />
              </div>
            </div>
            {/* confirm password */}
            <div className="field mb-6">
              <label className="label has-text-white has-text-weight-light">
                Confirm Password
              </label>
              <div className="control">
                <input
                  className="input is-size-5"
                  type="password"
                  placeholder="confirm password"
                  name="confirm-password"
                />
              </div>
            </div>
            {/* Register button */}
            <div className="control">
              <button className="button is-fullwidth is-primary has-text-weight-bold is-size-5">
                REGISTER
              </button>
            </div>
            {/* link to Login */}
            <div className="label has-text-white has-text-weight-light has-text-centered mt-2">
              <Link to="/login">Already have an account? Login here</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
