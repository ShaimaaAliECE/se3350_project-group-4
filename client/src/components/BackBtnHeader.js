import React from "react";
import { Link, withRouter } from "react-router-dom";

// Header component for login and register page
const LoginHeader = () => {
  return (
    <div>
      <div className="back-header">
        <div className="grid">
          <div className="start">
            {/* Back to home page */}
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default withRouter(LoginHeader);
