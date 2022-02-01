import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

//Header components
const UserProfile = (props) => {
  // fill icon with first letter of user's name
  const username = props.user.username;
  // const initials = username.charAt(0).toUpperCase();

  // logout and return to home page
  const toHome = () => {
    global.auth.logout();
    toast.success("Logout Successful.");
  };

  return (
    <div className="user-header">
      <div className="grid">
        <div className="start" />
        <div className="end">
          <div className="user-profile-group">
            <div className="button user-icon is-primary">
              <span className="user-initial">U</span>
            </div>
            <Link to="/" className="logout" onClick={toHome}>
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
