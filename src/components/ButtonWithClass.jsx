import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){  //a classok alapértelmezett constructor() metódusa
    super() //mivel extendeljük a Component Class-t ezért kell a super(), ez segít összekötni a constr. belüli dolgokat a két class között
    this.state = { //a this-el utalunk vissza a létrejövő objektumra
        key1: "This is the default state of a class component.",
        key2: 0,
        key3: "Szia Cini!"
    }
  } 
    render() {
        return (
            <div>
                {this.state.key1}
                {this.state.key2}
                {this.state.key3}
                <button onClick={ () => this.setState( {key1: "Class component clicked!"}) }>Click me</button>
                <button onClick={ () => this.setState( {key2: 1}) }>Change the number</button>
                <button onClick={ () => this.setState( {key3: "Szia szia!"}) }>Click</button>
            </div>
        );
    }   
}

export default ButtonWithClass;
