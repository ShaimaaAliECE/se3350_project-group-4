import React from "react";

export default function Block(props) {
  return <div className="box">{props.value}</div>;
}

// export default class Block extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: this.props.value,
//     };
//   }
//   render() {
//     return <div className="box">{this.state.value}</div>;
//   }
// }
