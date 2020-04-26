import React, { useState } from 'react'

import Letter from './Letter'
import Expression from './Expression'
import HangedImages from './HangedImages'

import './NewHanged.css'
import data from './expressions.json'


// const { name, description } = data.expressions[randomNumber(data.expressions.length)]


const NewHanged = () => {

  const alphabet = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const defineExpression = (expression = "none") => {
    const oldExpression = expression.id
    const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
    let newExpression = { ...data.expressions[randomNumber(data.expressions.length)] }
    if (expression === "none") {
      return newExpression
    }
    else {
      userExpression.push(oldExpression)
      setUserExpression(userExpression)
      console.log(userExpression)
      reloadGame(newExpression)
      // if (userExpression.filter(e => e === newExpression.name.toUpperCase())) {
      //   return "yes"
      // }
      // else {
      //   reloadGame(newExpression)
      // }
    }
  }

  // Set the letters which are uniques
  const defineLetterToFind = (expression) => new Set(expression)

  // Define the states
  const [userExpression, setUserExpression] = useState([])
  const [attempts, setAttempts] = useState(0)
  const [errors, setErrors] = useState(0)
  const [useLetters, setUseLetters] = useState([])
  const [remainingLetters, setRemainingLetters] = useState(alphabet)
  const [newExpression, SetNewExpression] = useState(defineExpression)
  const [expression, setExpression] = useState(newExpression.name.toUpperCase())
  const [description, SetDescription] = useState(newExpression.description)
  const [image, SetImage] = useState(newExpression.image)
  const [lettersToFind, setLettersToFind] = useState(defineLetterToFind(expression))
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
    if ([...lettersToFind].length === 0 || ([...lettersToFind].length === 1 && [...lettersToFind].includes(' '))) SetResult(true)
  }

  // Reinitialize when a new game is called
  const reloadGame = (expression) => {
    setAttempts(0)
    setErrors(0)
    setUseLetters([])
    setRemainingLetters('')
    setRemainingLetters(alphabet)
    SetResult(false)
    setExpression(expression.name.toUpperCase())
    SetDescription(expression.description)
    SetImage(expression.image)
    setLettersToFind(new Set(expression.name.toUpperCase()))
  }

  return (
    <>
      <div className="HangedDivImage">
        <HangedImages errors={errors} />
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
        <>
          <div>
            {`Bravo !!! vous avez gagné en ${attempts} coups !!! `}
            <input type="button" id="newGame" onClick={defineExpression(newExpression.id)} value="New game!" />
          </div>
          <p><img src={image} /></p>
          <p>{description}</p>
        </>
      }
    </>
  )
}

export default NewHanged