import React, { useState, useEffect } from 'react'

import './Letter.css'

const alphabet = [...new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")]

const Letter = (props) => {

  const { lettersToFind, remainingLetters, handleClick } = props
  console.log(remainingLetters)
  return (
    <div className="alphabetLetters">
      {alphabet.map(letter =>
        <button id={letter} onClick={handleClick}
          className={[...remainingLetters].includes(letter) ? "remainingLetters" : "knownLetters"}
        >{letter}</button>
      )}
    </div>
  )
}


export default Letter
