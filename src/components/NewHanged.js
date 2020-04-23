import React from 'react'

import './NewHanged.css'

class NewHanged extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attempts: 0,
      useLetters: [],
      remainingLetters: "ABCDEFGHIJKLMNOPKRSTUVWXYZ",
      expression: "",
      lettersToFind: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.checkMatching = this.checkMatching.bind(this)
  }

  handleClick() { }

  checkMatching() { }

  render() {
    return (
      <div>test</div>
    )
  }
}

export default NewHanged