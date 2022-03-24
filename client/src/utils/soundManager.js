import React from "react";
import Modal from "react-modal";
import { Animated } from "react-animated-css";

window.onload = function () {
  global.auth.setIsPlayingBGM(false);
  if (global.auth.getIsPlayingBGM()) {
    global.auth.playBGM(0.4);
    global.auth.setIsPlayingBGM(true);
  }
};

function SoundManager({ setOpenModal, modalOpen }) {
  const [bgmVol, setBgmVol] = React.useState(0.4);

  function playAudio() {
    global.auth.setIsPlayingBGM(true);
    global.auth.playBGM(bgmVol);
  }

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
            <progress
                className="progress is-primary"
                value={bgmVol * 100}
                max="100"
              >
                <i className="fa-solid fa-volume-low"></i>
              </progress>
              {/* level statistics */}
              <nav className="level">
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-primary">Volume -</p>
                    <p className="title has-text-danger"></p>
                    <div
                      className="button is-primary"
                      onClick={() => setBgmVol(bgmVol - 0.05)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-primary">Mute</p>
                    <div
                      className="button is-primary"
                      onClick={() => setBgmVol(0)}
                    >
                      <i className="fa-solid fa-volume-xmark"></i>
                    </div>
                  </div>
                </div>
                <div className="level-item has-text-centered m-4">
                  <div>
                    <p className="heading has-text-primary">Volume +</p>
                    <div
                      className="button is-primary"
                      onClick={() => setBgmVol(bgmVol + 0.05)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
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
                playAudio();
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
