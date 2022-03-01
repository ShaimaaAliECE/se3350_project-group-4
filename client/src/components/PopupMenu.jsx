import React from "react";
import { render } from "react-dom";

/**
   * popup menu component : 
   * used as a container for pause and gameover menu
    (1)、child component can be rendered within the menu
    (2)、child components can close parent component (cancel button)
    (3)、child component can communicate with other components (i.e. restart current level)
 */

class PopupMenu extends React.Component {
  //popup window state
  state = {
    active: false, //closed by default
    component: null, //empty (no child component by default)
    callback: () => {},
  };

  // ----- Popup menu functions ----- //

  //open popup window method
  open = (
    options = {
      props: {},
      component: null,
      callback: () => {},
    }
  ) => {
    const { props, component, callback } = options;
    //key is always different, meaning that a new 'component' is render every time window opened.
    const window_key = new Date().getTime();
    // convert 'component' into a real child component
    const child_component = React.createElement(component, {
      ...props,
      close: this.close,
      restart: this.restart,
      key: window_key,
    });
    this.setState({
      active: true,
      component: child_component,
      callback: callback,
    });
  };

  //close popup window method
  close = (data) => {
    this.setState({
      active: false,
    });
    // save data on close
    this.state.callback(data);
  };

  // ----- Pause Menu functions ----- //

  // restart the level
  restart = () => {
    window.location.reload(false);
  };

  render() {
    // toggle between active/inactive using css class
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };

    return (
      <div className={_class[this.state.active]}>
        {/* overlay */}
        <div
          className="over-layer"
          onClick={() => {
            this.close();
          }}
        ></div>
        {/* window*/}
        <div className="window">
          <div className="head">
            {/* close button */}
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              ×
            </span>
            {/* mounted child component */}
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

//create an empty div container
const _div = document.createElement("div");
//render the child component into the popup window component
document.body.appendChild(_div);
const _popup = render(<PopupMenu />, _div);
export default _popup;
