import React from "react";
import { Link } from "react-router-dom";
import PopupMenu from "components/PopupMenu";
import EditLevelOneForm from "pages/Admin/EditLevelForms/EditLevelOneForm";
import EditLevelTwoForm from "pages/Admin/EditLevelForms/EditLevelTwoForm";
import EditLevelThreeForm from "pages/Admin/EditLevelForms/EditLevelThreeForm";
import EditLevelFourForm from "pages/Admin/EditLevelForms/EditLevelFourForm";
import EditLevelFiveForm from "pages/Admin/EditLevelForms/EditLevelFiveForm";

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
        <div className="title section">
          <h2 className="subtitle is-3 has-text-light">Start Editing</h2>
          <h1 className="title is-1 has-text-primary">Merge Sort</h1>
        </div>
        {/* level select buttons */}
        <div className="columns is-multiline buttons are-large">
          {/* lv 1 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary"
              onClick={toEditLv1}
            >
              <span className="btn-text">Edit Level 1</span>
            </button>
          </div>
          {/* lv 2 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary"
              onClick={toEditLv2}
            >
              <span className="btn-text">Edit Level 2</span>
            </button>
          </div>
          {/* lv 3 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary"
              onClick={toEditLv3}
            >
              <span className="btn-text">Edit Level 3</span>
            </button>
          </div>
          {/* lv 4 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary"
              onClick={toEditLv4}
            >
              <span className="btn-text">Edit Level 4</span>
            </button>
          </div>
          {/* lv 5 */}
          <div className="column is-half">
            <button
              className="lv-btn button is-rounded has-background-primary"
              onClick={toEditLv5}
            >
              <span className="btn-text">Edit Level 5</span>
            </button>
          </div>
          {/* view analytics */}
          <div className="column is-half">
            <Link
              to="/analytics"
              className="lv-btn button is-rounded has-background-primary"
            >
              <span className="btn-text">View Analytics</span>
            </Link>
          </div>
          {/* back button */}

          <div className="column is-full-width">
            <Link
              to="/alg"
              className="long-btn button is-rounded has-background-light"
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
