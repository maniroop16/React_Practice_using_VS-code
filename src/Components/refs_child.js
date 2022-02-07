import React, { Component } from 'react';

class refs_child extends Component {

    constructor(props) {
      super(props)
    
        this.inputRef = React.createRef(); 
    }
    
    inputFocus = () => {
        this.inputRef.current.focus();
    }

  render() {
    return <div>
        <input type = "text" ref={this.inputRef}></input>
    </div>;
  }
}

export default refs_child;
