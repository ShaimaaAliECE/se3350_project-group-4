import React from "react";

export default function Block(props) {
  let cN = "box-stuff";
  if (props.value == null) cN = "";
  return (
    <button className={cN} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
