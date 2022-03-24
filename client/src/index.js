//entry point js
import React from "react";
import ReactDOM from "react-dom";
import Router from "Router";
import "utils/gameManager";
import IdleTimerContainer from "utils/IdleTimerContainer";
import { ToastContainer } from "react-toastify";
import SoundManager from "utils/soundManager";
//scss files
import "css/PageStyles.scss";
import "css/ComponentStyles.scss";
import "css/Theme.scss";
import "css/hover.css";

// css
import "react-toastify/dist/ReactToastify.css";

const AudioPlayer = () => {
  
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      <div className="audio-player-wrapper">
        <div
          className="button is-primary audio-button"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <i className="fa-solid fa-music"></i>
        </div>
      </div>
      {modalOpen && (
        <SoundManager setOpenModal={setModalOpen} modalOpen={modalOpen} />
      )}
    </div>
  );
};

ReactDOM.render(
  <div>
    {/* container for toast notifications */}
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      limit={2}
    />

    <IdleTimerContainer></IdleTimerContainer>
    <AudioPlayer />
    <Router />
  </div>,
  document.getElementById("root")
);
