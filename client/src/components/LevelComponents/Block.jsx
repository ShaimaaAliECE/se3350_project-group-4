import React from "react";
import "../../css/LevelStyles.css";

export default function Block(props) {
  let cN = "level-block button is-light is-outlined is-focused";
  if (props.value == null) cN = "";
  return (
    <div className={cN} onClick={props.onClick}>
      {props.value}
    </div>
  );
}
