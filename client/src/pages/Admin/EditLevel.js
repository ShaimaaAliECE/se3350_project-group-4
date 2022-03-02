import React from "react";
import { Link } from "react-router-dom";
import PopupMenu from "components/PopupMenu";
import EditLevelOneForm from "pages/Admin/EditLevelForms/EditLevelOneForm";
import EditLevelTwoForm from "pages/Admin/EditLevelForms/EditLevelTwoForm";
import EditLevelThreeForm from "pages/Admin/EditLevelForms/EditLevelThreeForm";
import EditLevelFourForm from "pages/Admin/EditLevelForms/EditLevelFourForm";
import EditLevelFiveForm from "pages/Admin/EditLevelForms/EditLevelFiveForm";
import { Animated } from "react-animated-css";

const EditLevel = (props) => {
  // edit level 1 function
  const toEditLv1 = () => {
    PopupMenu.open({
      component: EditLevelOneForm,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  // edit level 2 function
  const toEditLv2 = () => {
    PopupMenu.open({
      component: EditLevelTwoForm,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  // edit level 3 function
  const toEditLv3 = () => {
    PopupMenu.open({
      component: EditLevelThreeForm,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  // edit level 4 function
  const toEditLv4 = () => {
    PopupMenu.open({
      component: EditLevelFourForm,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  // edit level 5 function
  const toEditLv5 = () => {
    PopupMenu.open({
      component: EditLevelFiveForm,
      callback: (data) => {
        //console.log(data);
      },
    });
  };

  return (
    <div className="select-wrapper">
      <div className="select-box">
        {/* title */}
        <Animated
            animationIn="bounceInLeft"
            animationOut="bounceOut"
            isVisible={true}
          >
        <div className="title section">
          <h2 className="subtitle is-3 has-text-light">Start Editing</h2>
          <h1 className="title is-1 has-text-primary">Merge Sort</h1>
        </div>
        </Animated>
        {/* level select buttons */}
        <div className="columns is-multiline buttons are-large">
          {/* lv 1 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink"
              onClick={toEditLv1}
            >
              <span className="btn-text">Edit Level 1</span>
              <i className="fa-solid fa-pen-to-square hvr-icon"></i>
            </button>
          </div>
          {/* lv 2 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink"
              onClick={toEditLv2}
            >
              <span className="btn-text">Edit Level 2</span>
              <i className="fa-solid fa-pen-to-square hvr-icon"></i>
            </button>
          </div>
          {/* lv 3 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink"
              onClick={toEditLv3}
            >
              <span className="btn-text">Edit Level 3</span>
              <i className="fa-solid fa-pen-to-square hvr-icon"></i>
            </button>
          </div>
          {/* lv 4 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink"
              onClick={toEditLv4}
            >
              <span className="btn-text">Edit Level 4</span>
              <i className="fa-solid fa-pen-to-square hvr-icon"></i>
            </button>
          </div>
          {/* lv 5 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink"
              onClick={toEditLv5}
            >
              <span className="btn-text">Edit Level 5</span>
              <i className="fa-solid fa-pen-to-square hvr-icon"></i>
            </button>
          </div>
          {/* view analytics */}
          <div className="column is-half">
            <Link
              to="/ms/analytics"
              className="lv-btn button is-rounded has-background-primary hvr-icon-drop hvr-pulse-shrink"
            >
              <span className="btn-text">View Analytics</span>
              <i className="fa-solid fa-eye hvr-icon"></i>
            </Link>
          </div>
          {/* back button */}

          <div className="column is-full-width">
            <Link
              to="/alg"
              className="long-btn button is-rounded has-background-light hvr-hang"
            >
              <span className="btn-text">Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLevel;
