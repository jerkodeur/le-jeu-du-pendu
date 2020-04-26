import React, { useState } from 'react'

import Letter from './Letter'
import Expression from './Expression'
import HangedImages from './HangedImages'

import './NewHanged.css'
import data from './expressions.json'

const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
const { name, description } = data.expressions[randomNumber(data.expressions.length)]
const alphabet = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

const NewHanged = () => {
  // Define the states
  const [attempts, setAttempts] = useState(0)
  const [errors, setErrors] = useState(0)
  const [useLetters, setUseLetters] = useState([])
  const [remainingLetters, setRemainingLetters] = useState(alphabet)
  const [expression, setExpression] = useState(name.toUpperCase())
  const [lettersToFind, setLettersToFind] = useState(new Set(name.toUpperCase()))
  const [result, SetResult] = useState(false)

  // When the user click on a letter
  const handleClick = (e) => {
    setAttempts(attempts + 1) // Add one attempt
    // Remove the lettersToFind if necessary and add an error if not occur
    lettersToFind.delete(e.target.id) ? lettersToFind.delete(e.target.id) : setErrors(errors + 1)
    setLettersToFind(new Set([...lettersToFind]))
    // Set the remainingLetters if necessary
    remainingLetters.delete(e.target.id)
    setRemainingLetters(new Set([...remainingLetters]))
    // Add the new use letter if not yet used
    useLetters.push(e.target.id)
    setUseLetters(useLetters)
    // If all letters found, the game is over
    if ([...lettersToFind].length === 1) SetResult(true)

  }

  return (
    <>
      <div className="HangedDivImage">
        <HangedImages attempts={errors} />
      </div>
      <div>
        {!result &&
          <div>
            <Expression expression={expression} useLetters={useLetters} />
            <Letter expression={expression} lettersToFind={lettersToFind} remainingLetters={remainingLetters} handleClick={handleClick} />
            <p>Lettres restantes: {[...lettersToFind].length}</p>
            <h5>Nombre de tentatives: <b>{attempts}</b></h5>
          </div>
        }
      </div>
      {result &&
        <div>
          {result && `Bravo !!! vous avez gagné en ${attempts} coups !!! `}
        </div>
      }
    </>
  )
}

export default NewHanged