import React from "react";
import Modal from "react-modal";
import { Animated } from "react-animated-css";

function SoundManager({ setOpenModal, modalOpen }) {
  return (
    <Modal isOpen={modalOpen} ariaHideApp={false} className="modal-overlay">
      <Animated
        animationIn="fadeInDown"
        animationOut="bounceOut"
        isVisible={true}
      >
        <div className="modal-container">
          <div className="modal-title">
            <h2 className="title is-2 has-text-primary">Sound Settings</h2>
          </div>
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
                    <p className="title has-text-danger"></p>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Lives Left: </p>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-danger">Up Next:</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="modal-btn2 button is-primary hvr-grow"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </Animated>
    </Modal>
  );
}

export default SoundManager;
