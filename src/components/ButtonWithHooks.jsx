import React, { useEffect, useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component.")
    const [key2, setKey2] = useState(0)
    const [countries, setCountries] = useState([]) //a useState 2 elem hosszúságú tömbbel tér vissza!!!

    //ami ebben fut le, tudja, hogy nem feltétlenül kell újra lefuttatnia csak majd bizonyos esetekben
    useEffect(
        () => {
            console.log("render")
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))
        },
        []
    )
 
    return (
        <>
            <div>{ key1 }</div>
            <div>{ key2 }</div>
            <button onClick={ () => setKey1("Function component clicked.") }>Click me</button>
            <button onClick={ () => setKey2(2) }>Change the number</button>
            <div className='countries'>
                {countries.map( (country, index) => <div key={index}>{country.name.common}</div> )}
            </div>
        </>
    );
}

export default ButtonWithHooks;