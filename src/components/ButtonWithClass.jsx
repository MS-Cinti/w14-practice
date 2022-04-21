import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
    super() //jelen esetben meghívjuk a Component nevű class constructorát is ezzel a super()-el
    this.state = {
        key1: "This is the default state of a class component.",
        key2: 0,
        title: {
            main: "Maintitle",
            sub: "Subtitle"
        },
        countries: []
    }
    console.log('1')
  }
  
  componentDidMount() {
      console.log("három")
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countriesData => this.setState(
        () => {
            return {countries: countriesData}
        },
        () => console.log(this.state)
      ))
  }

    render() {
        console.log("kettő")
        return (
            <div>
                {this.state.key1}
                {this.state.key2}
                <button onClick={ () => this.setState({key1: "Class component clicked!"}) }>Click me</button>
                <button onClick={ () => this.setState({key2: 1}) }>Change the number</button>
                {/* <button onClick={() => {
                    this.state.key2 = 1
                    console.log(this.state)
                }}>Change the number</button> */}
                {/* <button onClick={ () => {
                    this.setState({
                        title: {
                            main: "h1",
                            sub: "h2"
                        }
                    })
                    console.log(this.state)
                }}>{this.state.title.main}</button> */}
                <button onClick={ () => {
                    this.setState(
                        () => {
                            return {
                                title: {
                                    main: "h1",
                                    sub: "h2"
                                }
                            }
                        },
                        () => {
                            console.log(this.state)
                        }
                    )
                }}>{this.state.title.main}</button>
                <div className='countries'>
                    {this.state.countries.map( (country, index) => <div key={index}>{country.name.common}</div>)}
                </div>
            </div>
        );
    }   
}
//setState async művelet
export default ButtonWithClass;
