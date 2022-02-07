import React, { Component } from 'react';
import Mount_b from "./mount_b.js" ;

class mount_a extends Component {

constructor(props) {
  super(props)

  this.state = {
     name : "lifecycle_a constructor"
  }
  console.log("lifecycle_a Constructor")
}

static getDerivedStateFromProps(state,props){
    console.log("lifecycle_a getDerivedStateFromProps")
    return null;
}

componentDidMount(){
    console.log("lifecycle_a Componentdidmount")
    return null;
}


  render() {
    console.log("lifecycle_a render")
    return <div>
        <div>lifecycle_a</div>
        <div><Mount_b/></div>
        </div>;
  }
}

export default mount_a;
