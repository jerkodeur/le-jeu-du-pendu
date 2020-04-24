import React, { useState, useEffect } from 'react'

import './Letter.css'

const Letter = (props) => {

  const [expression, setExpression] = useState(props.expression)
  const [lettersToFind, setLettersToFind] = useState(new Set(props.expression))

  return (
    <div>
      <div>{expression}</div>
      <ul>
        {lettersToFind}
      </ul>
    </div>
  )
}

export default Letter
