import React from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function PositiveNotification(){
    const notify = ()=>{
        toast.success('successful', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
          
    }
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
    /*
    return (
        <div className="NegativeNotification">
            <button onClick={notify}>Click Me!</button>
            </div>
    );
    */
}