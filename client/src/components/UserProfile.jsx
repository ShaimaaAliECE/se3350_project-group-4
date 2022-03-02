import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import PopupMenu from "components/PopupMenu";
import UserProfileDetails from "components/UserProfileDetails";

//Header components
const UserProfile = (props) => {
  // fill icon with first letter of user's name
  const username = props.user.username;
  const initials = username.charAt(0).toUpperCase();

  //open user profile detail
  const toProfile = () => {
    PopupMenu.open({
      component: UserProfileDetails,
      props: {
        user: props.user,
      },
      callback: (data) => {
        if (data === "logout") {
          toast.success("Logout Successful.");
          props.history.push("/");
        }
      },
    });
  };

  return (
    <div className="user-header">
      <div className="grid">
        <div className="start" />
        <div className="end">
          <div className="user-profile-group">
            <div className="button user-icon is-primary">
              <span className="user-initial">{initials}</span>
            </div>
            <span className="profile" onClick={toProfile}>
              Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserProfile);
