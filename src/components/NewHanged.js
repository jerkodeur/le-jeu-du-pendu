import React, { useState, useEffect } from 'react'

import Letter from './Letter'

import './NewHanged.css'
import data from './expressions.json'

const { id, name, description } = data.expressions[0]
const alphabet = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

const NewHanged = () => {

  const [attempts, setAttempts] = useState(0)
  const [useLetters, setUseLetters] = useState([])
  const [remainingLetters, setRemainingLetters] = useState(alphabet)
  const [expression, setExpression] = useState(name.toUpperCase())
  const [lettersToFind, setLettersToFind] = useState(new Set(name.toUpperCase()))


  //  {

  //   setLettersToFind(lettersToFind)
  //   console.log(lettersToFind)
  // }
  const handleClick = (e) => {
    setAttempts(attempts + 1)
    lettersToFind.delete(e.target.id)
    remainingLetters.delete(e.target.id)
    // console.log(lettersToFind)
    setLettersToFind(new Set([...lettersToFind]))
    setRemainingLetters(new Set([...remainingLetters]))

  }
  // useEffect(() => {
  //   setLettersToFind(lettersToFind)
  // }, [lettersToFind])

  // console.log(lettersToFind, "toFind")
  // console.log(remainingLetters, "alphabet")
  return (
    <div>
      <div>
        <h2>Expression: {expression}</h2>
        <h5>Lettres restantes: {lettersToFind}</h5>
      </div>
      <div>
        <Letter expression={expression} lettersToFind={lettersToFind} remainingLetters={remainingLetters} handleClick={handleClick} />
        <h5>Nombre de tentatives: <b>{attempts}</b></h5>
      </div>

    </div>
  )
}

export default NewHanged