import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        {/* error message */}
        <h2>
          <span className="has-text-danger">404</span>: Page Not Found
        </h2>
      </div>
    );
  }
}

export default NotFound;
