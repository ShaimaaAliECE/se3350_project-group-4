import React from "react";
import { render } from "react-dom";

/**
   * popup menu component : 
   * used as a container for pause and gameover menu
    (1)、child component can be rendered within the menu
    (2)、Child components can close parent component (cancel button)
    (3)、Child component can communicate with other components (i.e. restart current level)
 */

class PopupMenu extends React.Component {
  //popup window state
  sate = {
    active: false, //closed by default
    component: null, //empty (no child component by default)
  };
  render() {
    const _class = {
      true: "popup-window active",
      false: "popup-window",
    };

    return (
      <div className={_class[this.state.active]}>
        {/* overlay rest of the page when panel is open*/}
        <div
          className="over-layer"
          onClick={() => {
            //close panel when user clicks on overlay
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              ×
            </span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

//render the child component into the popup window component 
const _div = document.createElement("div");
document.body.appendChild(_div);
const _popup = render(<PopupMenu/>, _div);
export default _popup;