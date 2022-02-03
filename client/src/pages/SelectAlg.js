import React, { useMemo } from "react";
import UserProfile from "../components/UserProfile";
import { useHistory } from "react-router-dom";

const SelectAlg = (props) => {
  // get decoded user info
  const user = useMemo(() => {
    return global.auth.getUser() || {};
  }, []);

  //redirect to different pages based on user type
  let history = useHistory();
  const selectOrEdit = () => {
    if (user.type === 1) {
      history.push("/edit");
    } else {
      history.push("/select");
    }
  };

  return (
    <div>
      <UserProfile user={user} />
      <div className="alg-wrapper">
        <div className="section">
          {/*  */}
          <div className="title label has-text-light">
            <span>Hello </span>
            {/* display username of user that's currently logged in */}
            <span className="has-text-primary">{user.username}</span>,
            <div>Choose an algorithm to begin...</div>
          </div>
          {/* dropdown */}
          <div className="dropdown is-hoverable">
            {/* dropdown box */}
            <div className="dropdown-trigger">
              {/* dropdown button */}
              <button
                className="button is-large is-rounded has-background-primary"
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
                {/* item 1 */}
                <div className="dropdown-item" onClick={selectOrEdit}>
                  <span className="dropdown-text">Merge Sort</span>
                </div>
                <hr className="dropdown-divider"></hr>
                {/* item 2 */}
                <div className="dropdown-item">
                  <span className="dropdown-text">Quick Sort</span>
                </div>
                <hr className="dropdown-divider"></hr>
                {/* item 3 */}
                <div className="dropdown-item">
                  <span className="dropdown-text">...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAlg;
