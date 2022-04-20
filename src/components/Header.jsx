import React from 'react'

//ez történik a háztető alatt, amikor a jsx-ben létrehozunk egy divet pl
function Header({to}) {
    //ha a returnnel egy sorban van a kód, akkor nem kell a () jele
  /*return <div>Header {toHeader}</div>*/ 
  //1.arg: milyen típusú elemet akarunk létrehozni, 2.arg: null, 3.arg: `` között szöveg
    //return React.createElement("div", null, `Header ${toHeader}`)
    //return <div>Header {to}</div> //input így néz ki: ({to})
    return React.createElement("div", null, `Header ${to}`)

}

export default Header