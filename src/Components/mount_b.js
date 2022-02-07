import React, { Component } from 'react';

class mount_b extends Component {

constructor(props) {
  super(props)

  this.state = {
     name : "lifecycle_b constructor"
  }
  console.log("lifecycle_b Constructor")
}

static getDerivedStateFromProps(state,props){
    console.log("lifecycle_b getDerivedStateFromProps")
    return null;
}

componentDidMount(){
    console.log("lifecycle_b Componentdidmount")
    return null;
}


  render() {
    console.log("lifecycle_b render")
    return <div>lifecycle_b</div>;
  }
}

export default mount_b;
