import React, { Component } from "react";

class conditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false,
    };
  }

  //   render() {
  //     let message;
  //     if (this.state.message) {
  //       message = "saimaniroop";
  //     } else {
  //       message = "guest";
  //     }
  //     return <div>{message}</div>;
  //   }
  // }

  render() {
    return this.state.message ? (
      <div>Iam saimaniroop</div>
    ) : (
      <div>Iam guest</div>
    );
  }
}

export default conditional;
