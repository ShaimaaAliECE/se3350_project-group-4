import React from "react";

//user profile component
export default function UserProfileDetails(props) {
  
  // logout method
  const logout = () => {
    global.auth.logout();
    props.close("logout");
  };

  return (
    <div className="user-profile">
      <p className="title has-text-centered has-text-light">User Profile</p>
      <fieldset disabled>
        {/* User name */}
        <div className="field">
          <div className="control">
            <label className="label has-text-left has-text-light">
              Username
            </label>
            <input
              className="input"
              type="text"
              defaultValue={props.user.username}
            />
          </div>
        </div>
        {/* user type */}
        <div className="field">
          <div className="control">
            <label className="label has-text-left has-text-light">
              Admin Privileges
            </label>
            <input
              className="input"
              type="text"
              //change user type status
              defaultValue={props.user.type === 1 ? "Yes" : "No"}
            />
          </div>
        </div>
      </fieldset>

      <br />
      <br />
      <div className="field is-grouped is-grouped-centered">
        {/* logout button */}
        <div className="control">
          <button className="button is-danger is-medium" type="button" onClick={logout}>
            Logout
          </button>
        </div>
        {/* close button */}
        <div className="control">
          <button
            className="button is-medium"
            type="button"
            onClick={() => {
              props.close();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
