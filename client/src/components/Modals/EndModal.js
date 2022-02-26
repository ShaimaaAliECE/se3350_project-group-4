import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";

const EndModal = (props) => {
  // get values from props
  const { title, life, time } = props;

  // navigat eto next level based on props
  const toNextLevel = () => {
    if (props.level === "1") {
      props.history.push("/ms/level2");
    } else if (props.level === "2") {
      props.history.push("/ms/level3");
    } else if (props.level === "3") {
      props.history.push("/ms/level4");
    } else if (props.level === "4") {
      props.history.push("/ms/level5");
    } else if (props.level === "5") {
      props.history.push("/ms/custom");
    } else if (props.level === "custom") {
      props.history.push("/ms/select");
    }
  };

  return (
    <div className="modal-overlay">
      <Animated
        animationIn="zoomInUp"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="modal-container">
          {/* modal title */}
          <div className="modal-title hvr-pop">
            <h2 className="title is-2 has-text-primary">
              <i className="fa-solid fa-trophy"></i> Level {title} Completed!
            </h2>
          </div>

          {/* modal body */}
          <div className="modal-body">
            <div>
              <figure className="image is-2by1">
                <img
                  src="https://c.tenor.com/O5jZtKfuDRoAAAAd/penguinz0-yeah-baby.gif"
                  alt="Congrats"
                />
              </figure>

              {/* level statistics */}
              <nav className="level">
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Time Spent:</p>
                    <p className="title has-text-danger">{time}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Lives Left: </p>
                    <p className="title has-text-danger">{life}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Next Level:</p>
                    <p className="title has-text-danger">{title + 1}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* tag / note */}
          <p className="tag is-danger is-align-self-center hvr-grow">
            Note: This Attempt has been logged!
          </p>

          {/* buttons */}
          <div className="modal-footer">
            <Link to="/ms/select">
              <button className="modal-btn button is-primary hvr-sweep-to-left">
                Select Another Level
              </button>
            </Link>

            <button
              className="modal-btn button is-primary hvr-pulse hvr-sweep-to-right"
              onClick={toNextLevel}
            >
              Start Next Level
            </button>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default withRouter(EndModal);
