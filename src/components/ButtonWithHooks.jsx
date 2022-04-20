import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component.")
    const [key2, setKey2] = useState(0)

    return (
        <>
            <div>{ key1 }</div>
            <div>{ key2 }</div>
            <button onClick={ () => setKey1("Function component clicked.") }>Click me</button>
            <button onClick={ () => setKey2(2) }>Change the number</button>
        </>
    );
}

export default ButtonWithHooks;