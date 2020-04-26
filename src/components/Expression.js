import React from 'react'

import './Expression.css'

const Expression = (props) => {

  console.log(props.useLetters, "test")
  return (
    <ul className="expression">
      {props.expression.split('').map((letter, id) =>
        <li className={letter !== " " ? "expressionLetters" : "space"}>
          {props.useLetters.includes(letter) ? letter : letter === ' ' ? "  " : letter === "-" || letter === "'" ? letter : "_"}
        </li>
      )}
    </ul>
  )
}
export default Expression
