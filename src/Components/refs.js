import React, { Component } from "react";

class refs extends Component {

    constructor(props) {
      super(props)
    
        this.inputRef = React.createRef();
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    clicked = () => {
        alert(this.inputRef.current.value);
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clicked}>Click</button>
      </div>
    );
  }
}

export default refs;
