import React, { Component } from "react";

class states extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello Visiter",
    }
  }

  clicked(){
      this.setState({
          message : "button clicked"
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick = {() => this.clicked()}>click</button>
      </div>
    );
  }
}

export default states;
