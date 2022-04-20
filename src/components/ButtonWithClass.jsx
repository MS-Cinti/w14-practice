import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
    super()
    this.state = {
        key1: "This is the default state of a class component."
    }
  } 
    render() {
        return (
            <div>
                {this.state.key1}
                <button onClick={ () => this.setState({key1: "Class component clicked!"}) }>Click me</button>
            </div>
        );
    }   
}

export default ButtonWithClass;
