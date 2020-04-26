import React from 'react'

import './HangedImages.css'

const HangedImages = (props) => {

  return (
    <img alt="A gourmet background with chocolate and the hanged man who appears gradually when errors occured" src={`images/pendu_${props.attempts}`} />
  )
}

export default HangedImages