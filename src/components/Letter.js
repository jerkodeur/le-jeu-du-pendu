import React, { useState, useEffect } from 'react'

import './Letter.css'

const alphabet = [...new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")]
const firstPartAlphabet = alphabet.filter((letter, id) => id < 13)
const lastPartAlphabet = alphabet.filter((letter, id) => id >= 13)

const Letter = (props) => {

  const { remainingLetters, handleClick } = props
  return (
    <div className="alphabetLetters">
      {firstPartAlphabet.map((letter, id) =>
        <button id={letter} onClick={handleClick} key={id}
          className={[...remainingLetters].includes(letter) ? "remainingLetters" : "knownLetters"}
        >{letter}</button>
      )}<br />
      {lastPartAlphabet.map((letter, id) =>
        <button id={letter} onClick={handleClick} key={id}
          className={[...remainingLetters].includes(letter) ? "remainingLetters" : "knownLetters"}
        >{letter}</button>
      )}
    </div>
  )
}


export default Letter
