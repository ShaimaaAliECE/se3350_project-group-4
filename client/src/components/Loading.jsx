import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="not-found">
        {/* loading message */}
        <h2>
          <strong className="has-text-primary">Loading...</strong>
        </h2>
      </div>
    );
  }
}

export default Loading;
