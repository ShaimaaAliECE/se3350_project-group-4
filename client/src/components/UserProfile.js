import React from "react";

//Header components
const UserProfile = (props) => {

  // fill icon with first letter of user's name
  const username = props.user.username;
  const initials = username.charAt(0).toUpperCase();

  return (
    <div className="user-header">
      <div className="grid">
        <div className="start"/>
        <div className="end">
          <div className="user-profile-group">
            <div className="button user-icon is-primary">
              <span className="user-initial">{initials}</span>
            </div>
            <span className="logout">Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
