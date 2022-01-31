import React from 'react';

//Header components
const UserProfile = props => {
    //open user profile panel method
    const toProfile = () => {
      Panel.open({
        component: UserProfile,
        props: {
          user: props.user
        },
        callback: data => {
          if (data === 'logout') {
            props.history.go(0);
          }
        }
      });
    };
    return (
      <div className="header">
        <div className="grid">
          <div className="start">
            {/* refresh page */}
            <Link to="/">Home</Link>
          </div>
          <div className="end">
            {props.user.nickname ? (
              //display user profle panel on click
              <span className="nickname" onClick={toProfile}>
                <i className="far fa-user"></i>
                {props.user.nickname}
              </span>
            ) : (
              // fragmented template 
              <React.Fragment>
                {/* redirect to login page */}
                <Link to="/login">Login</Link>
                {/* redirect to Register page */}
                <Link to="/register">Register</Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default withRouter(UserProfile);