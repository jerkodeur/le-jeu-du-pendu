import React, { useState, useEffect } from 'react'

import './Letter.css'

const Letter = (props) => {

  const [expression, setExpression] = useState(props.expression)
  const [lettersToFind, setLettersToFind] = useState(new Set(props.expression))

  const handleClick = (e) => alert(`Vous avez cliquez sur la lettre ${e.target.id}`)

  return (
    <div>
      <div>{expression}</div>
      <ul>
        {[...lettersToFind].map(letter => <li id={letter} onClick={handleClick}>{letter}</li>)}
      </ul>
    </div>
  )
}

export default Letter
