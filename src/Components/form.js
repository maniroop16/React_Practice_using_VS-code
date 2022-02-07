import React, { Component } from 'react';

class form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value : ""
      }
    }
    
    changeState = (event) =>{
        this.setState({
            value : event.target.value
        })
    }

  render() {
    return( 
    <div>
        <form>
            <div>
                <label>Username:</label>
                <input type = "text" value = {this.state.value} onChange={this.changeState}></input>
            </div>
            <div>
                <label>Somename:</label>
                <input type = "text" value = {this.state.value} onChange={this.changeState}></input>
            </div>
        </form>
    </div>)
  }
}

export default form;
