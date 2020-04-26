import React from 'react'
import pendu_0 from './images/pendu_0.png'
import pendu_1 from './images/pendu_1.png'
import pendu_2 from './images/pendu_2.png'
import pendu_3 from './images/pendu_3.png'
import pendu_4 from './images/pendu_4.png'
import pendu_5 from './images/pendu_5.png'
import pendu_6 from './images/pendu_6.png'
import pendu_7 from './images/pendu_7.png'
import pendu_8 from './images/pendu_8.png'
import pendu_9 from './images/pendu_9.png'
import pendu_10 from './images/pendu_10.png'
import pendu_11 from './images/pendu_11.png'

import './HangedImages.css'

const HangedImages = (props) => {

  let image = ''

  switch (props.attempts) {
    case (0):
      image = pendu_0;
      break;
    case (1):
      image = pendu_1;
      break;
    case (2):
      image = pendu_2;
      break
    case (3):
      image = pendu_3;
      break
    case (4):
      image = pendu_4;
      break
    case (5):
      image = pendu_5;
      break
    case (6):
      image = pendu_6;
      break
    case (7):
      image = pendu_7;
      break
    case (8):
      image = pendu_8;
      break
    case (9):
      image = pendu_9;
      break
    case (10):
      image = pendu_10
      break
    case (11):
      image = pendu_11
      break
    default:
      return pendu_0;
  }

  return (
    <img alt="A gourmet background with chocolate and the hanged man who appears gradually when errors occured" src={image} />
  )
}

export default HangedImages