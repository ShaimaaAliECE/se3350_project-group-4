import React from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RightSound from 'client/src/audioclips/RightSound.mp3';
import WrongSound from 'client/src/audioclips/WrongSound.mp3';

toast.configure()

function Notification(){

    function Soundplayer(){
      new Audio(RightSound).play();
    }
    function Soundplayer2(){
      new Audio(WrongSound).play();
    }
  
      function Correctnotify(){
        toast.success('Correct!')
    }
      function Incorrectnotify(){
        toast.error('Incorrect!')
      }
      
  
      return(
        <div className="CORRECT">
              <button onClick={() => {
                Correctnotify();
                Soundplayer();
              }}>Click Me!</button>
              <div className="INCORRECT">
              <button onClick={() => {
                Incorrectnotify();
                Soundplayer2();
              }}>Click Me!</button>
              </div>  
              </div>
               );
            
  
    };
  
    export default Notification;
  