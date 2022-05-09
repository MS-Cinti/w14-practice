import React from 'react'

/* function Header() {
  return (  //a sima zárójel miatt egy kódrésznek értelmezi, olyan mintha egy sorba írnánk, többsorosnál jó ez, itt most nem is kellene
    <div>Header</div>
  )
  //return <div>Header</div>
} */

//ez történik a háztető alatt, amikor a jsx-ben létrehozunk pl egy div headert
function Header({to}) { //itt (props.to) helyett írjuk ({to})-t
  /*return <div>Header {toHeader}</div>*/ 
  //return <div>Header {to}</div> //input így néz ki: ({to})
  //1.arg: milyen típusú elemet akarunk létrehozni, 2.arg: null, 3.arg: mintha insertadjacentHtml lenne, `` között szöveg
  //return React.createElement("div", null, `Header ${toHeader}`)
  return React.createElement("div", null, `Header ${to}`)

}

export default Header