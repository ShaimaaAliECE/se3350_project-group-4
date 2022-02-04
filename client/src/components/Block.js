import React from "react";

export default function Block(props) {
  let cN = "box-stuff ";
  if (props.value == null) cN = "";
  return <div className={cN}>{props.value}</div>;
}
