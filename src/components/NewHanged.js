import React, { useState } from 'react'

import Letter from './Letter'
import Expression from './Expression'

import './NewHanged.css'
import data from './expressions.json'

const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
const { id, name, description } = data.expressions[randomNumber(data.expressions.length)]
const alphabet = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

const NewHanged = () => {

  const [attempts, setAttempts] = useState(0)
  const [useLetters, setUseLetters] = useState([])
  const [remainingLetters, setRemainingLetters] = useState(alphabet)
  const [expression, setExpression] = useState(name.toUpperCase())
  const [lettersToFind, setLettersToFind] = useState(new Set(name.toUpperCase()))
  const [result, SetResult] = useState(false)


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
    useLetters.push(e.target.id)
    setUseLetters(useLetters)
    if ([...lettersToFind].length === 1) SetResult(true)

  }
  // useEffect(() => {
  //   setLettersToFind(lettersToFind)
  // }, [lettersToFind])

  // console.log(lettersToFind, "toFind")
  // console.log(remainingLetters, "alphabet")
  return (
    <>
      <div>
        <div>
          <Expression expression={expression} useLetters={useLetters} />
          <Letter expression={expression} lettersToFind={lettersToFind} remainingLetters={remainingLetters} handleClick={handleClick} />
          <h5>Nombre de tentatives: <b>{attempts}</b></h5>
        </div>
      </div>
      <div>
        Lettres restantes: {[...lettersToFind].length}
        {result && `Bravo !!! vous avez gagné en ${attempts} coups !!! `}
      </div>
    </>
  )
}

export default NewHanged