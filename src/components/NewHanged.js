import React from 'react'

import './NewHanged.css'
import data from './expressions.json'

const { id, name, description } = data.expressions[0]

class NewHanged extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      attempts: 0,
      useLetters: [],
      remainingLetters: "ABCDEFGHIJKLMNOPKRSTUVWXYZ",
      expression: name,
      lettersToFind: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.checkMatching = this.checkMatching.bind(this)
  }

  componentDidMount() {
    this.setState({ expression: name })
  }

  handleClick() { }

  checkMatching() { }

  render() {
    //   console.log(name, this.state.expression)
    return (
      <div>test</div>
    )
  }
}

export default NewHanged