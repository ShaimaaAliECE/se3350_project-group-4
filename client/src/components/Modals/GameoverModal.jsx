import React from "react";
import { Animated } from "react-animated-css";

const GameoverModal = (props) => {
  // get values from props
  const { title, dropdownItems, time } = props;

  // quit game
  const quitGame = () => {
    window.open("about:blank", "_self");
    window.close();
    global.auth.logout();
  };

  return (
    <div className="modal-overlay">
      <Animated
        animationIn="zoomInDown"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="modal-container">
          <div className="modal-title">
            <h2 className="title is-2 has-text-danger hvr-buzz">
              <i className="fa-solid fa-skull"></i> Oof! You Died
            </h2>
          </div>
          <div className="modal-body ">
            <div>
              <figure className="image is-2by1">
                <img
                  src="https://c.tenor.com/L553YL0qcMEAAAAC/halloween-skeletons.gif"
                  alt="oof"
                />
              </figure>
              <nav className="level">
              <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Level Name:</p>
                    <p className="title has-text-danger">{title }</p>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Time Spent:</p>
                    <p className="title has-text-danger">{time}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Lives Left: </p>
                    <p className="title has-text-danger">0</p>
                  </div>
                </div>
                
              </nav>
            </div>
          </div>
          {/* drop up */}
          <div className="dropdown is-hoverable is-up is-align-self-center mb-5">
            <div className="dropdown-trigger">
              <button
                className="button is-primary is-outlined is-rounded"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <strong>Stuck? Try playing previous levels again.</strong>
                <span className="icon is-small">
                  <i className="fas fa-angle-up" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                {/* drop down Items */}

                {dropdownItems}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              className="modal-btn button is-danger is-outlined hvr-rectangle-in"
              onClick={() => {
                quitGame();
              }}
            >
              Quit Game
            </button>
            <button
              className="modal-btn button is-danger is-outlined hvr-rectangle-in"
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default GameoverModal;
