import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="not-found">
        {/* loading message */}
        <h2>
          <span className="has-text-primary">Loading...</span>
        </h2>
      </div>
    );
  }
}

export default Loading;
