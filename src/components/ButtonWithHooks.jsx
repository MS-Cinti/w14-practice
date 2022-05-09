import React, { useState } from 'react' //obj.destructuringoljuk a useState metódust

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component.")
    const [key2, setKey2] = useState(0)
    const [key3, setKey3] = useState("Hahó")

    return (
        <>
            <div>{ key1 }</div>
            <div>{ key2 }</div>
            <div>{ key3 }</div>
            <button onClick={ () => setKey1("Function component clicked.") }>Click me</button>
            <button onClick={ () => setKey2(2) }>Change the number</button>
            <button onClick={ () => setKey3("Hahó hahó") }>Click</button>
        </>
    );
}

export default ButtonWithHooks;