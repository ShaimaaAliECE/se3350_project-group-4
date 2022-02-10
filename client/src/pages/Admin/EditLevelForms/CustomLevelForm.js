import React from "react";

// Edit Level components
class CustomLevelForm extends React.Component {
  // form state
  state = {
    boxCount: "",
    upperRange: "",
    lowerRange: "",
  };

  // retrieve info from form
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    //set name and value
    this.setState({
      [name]: value,
    });
  };

  // handle custom level form submission
  submit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-content">
        {/* header */}
        {/* title */}
        <div className="title section has-text-centered">
          <h2 className="subtitle is-3 has-text-light">Edit</h2>
          <h1 className="title is-2 has-text-primary">Custom Level</h1>
        </div>
        <form onSubmit={this.submit}>
          <div className="field mb-5">
            <div className="control">
              <label className="label has-text-left has-text-light">
                Number of Boxes
              </label>
              <input
                type="number"
                className="input"
                name="boxCount"
                value={this.state.boxCount}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field mb-5">
            <div className="control">
              <label className="label has-text-left has-text-light">
                Lower Range
              </label>
              <input
                type="number"
                className="input"
                name="lowerRange"
                value={this.state.lowerRange}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field mb-5">
            <div className="control">
              <label className="label has-text-left has-text-light">
                Upper Range
              </label>
              <input
                type="number"
                className="input"
                name="upperRange"
                value={this.state.upperRange}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="field is-grouped is-grouped-centered">
            {/* Start Button */}
            <div className="control">
              <button className="button is-primary is-medium">
                <strong>Start</strong>
              </button>
            </div>
            {/* Close Button */}
            <div className="control">
              <button
                className="button is-medium"
                type="button"
                onClick={() => {
                  this.props.close();
                }}
              >
                <strong>Back</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomLevelForm;
