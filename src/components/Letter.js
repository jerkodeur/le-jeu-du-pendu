import React, { useState, useEffect } from 'react'

import './Letter.css'

const Letter = (props) => {

  const [expression, setExpression] = useState(props.expression)
  let [lettersToFind, setLettersToFind] = useState(new Set(props.expression))

  return (
    <div>
      <div>{expression}</div>
      <ul>
        {[...lettersToFind].map(letter => <li id={letter} onClick={props.handleClick}>{letter}</li>)}
      </ul>
    </div>
  )
}

export default Letter
