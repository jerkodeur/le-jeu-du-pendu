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
  const [expression, setExpression] = useState(name.toUpperCase())
  const [lettersToFind, setLettersToFind] = useState([new Set(name.toUpperCase())])

  const handleClick = (e) => {
    alert(`Vous avez cliquez sur la lettre ${e.target.id}`)
    // const newLetterToFind = lettersToFind.delete(e.target.id)
    // setLettersToFind(newLetterToFind)
  }

  const checkMatching = () => { }

  //   console.log(name, this.state.expression)
  return (
    <div>
      <div>
        <h2>{expression}</h2>
      </div>
      <div>
        <Letter expression={expression} handleClick={handleClick} />
        <h5>{lettersToFind}</h5>
      </div>
    </div>
  )
}

export default NewHanged