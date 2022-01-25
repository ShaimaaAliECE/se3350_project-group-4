import React from "react";
import { Link, withRouter } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          {/* Back to home page */}
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default withRouter(LoginHeader);
