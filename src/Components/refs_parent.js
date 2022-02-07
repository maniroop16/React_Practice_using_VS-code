import React, { Component } from 'react';
import Refschild from "./refs_child.js" ;

class refs_parent extends Component {

    constructor(props) {
      super(props)
    
        this.parentRef = React.createRef();
    }
    
    Clicked = () =>{
        this.parentRef.current.inputFocus();
    }

  render() {
    return <div>
        <Refschild ref = {this.parentRef}/>
        <button onClick = {this.Clicked}>focus inpit</button>
    </div>;
  }
}

export default refs_parent;
