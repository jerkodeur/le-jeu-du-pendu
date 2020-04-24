import React, { useState, useEffect } from 'react'

import Letter from './Letter'

import './NewHanged.css'
import data from './expressions.json'

const { id, name, description } = data.expressions[0]
const alphabet = new Set(["ABCDEFGHIJKLMNOPQRSTUVWXYZ"])

const NewHanged = () => {

  const [attempts, setAttempts] = useState(0)
  const [useLetters, setUseLetters] = useState([])
  const [remainingLetters, setRemainingLetters] = useState(alphabet)
  const [expression, setExpression] = useState(name)
  const [lettersToFind, setLettersToFind] = useState([new Set(name)])

  const handleClick = () => { }

  const checkMatching = () => { }

  //   console.log(name, this.state.expression)
  return (
    <div>
      <div>
        <h2>{expression}</h2>
      </div>
      <div>
        Letter to Find: {lettersToFind}
        <Letter expression={expression} />
      </div>
    </div>
  )
}

export default NewHanged