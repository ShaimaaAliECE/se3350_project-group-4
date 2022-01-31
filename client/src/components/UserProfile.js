import React from "react";

//Header components
const UserProfile = (props) => {
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <span>Sign Out</span>
        </div>
        <div className="end">
            <span className="nickname" >
              <i className="far fa-user"></i>
              {/* {props.user.nickname} */}
            </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
