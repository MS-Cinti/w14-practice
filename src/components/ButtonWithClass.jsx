import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
    super()
    this.state = {
        key1: "This is the default state of a class component.",
        key2: 0
    }
  } 
    render() {
        return (
            <div>
                {this.state.key1}
                {this.state.key2}
                <button onClick={ () => this.setState({key1: "Class component clicked!"}) }>Click me</button>
                <button onClick={ () => this.setState({key2: 1}) }>Change the number</button>
            </div>
        );
    }   
}

export default ButtonWithClass;
