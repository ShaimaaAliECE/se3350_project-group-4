import React from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Player } from "tone";
toast.configure()


//const RightSound = new Audio('client\src\audioclips\RightSound.mp3');
//const WrongSound = new Audio('client\src\audioclips\WrongSound.mp3');

function PositiveNotification(){
    const notify = ()=>{
        toast.success('successful', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
          
    }
    //Play.RightSound();
    /*
    return (
        <div className="NegativeNotification">
            <button onClick={notify}>Click Me!</button>
            </div>
    );*/
}

function NegativeNotification(){
    const notify = ()=>{
        toast.error('Runtime error', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})          
    }
    //play.WrongSound();
    /*
    return (
        <div className="NegativeNotification">
            <button onClick={notify}>Click Me!</button>
            </div>
    );
    */
}