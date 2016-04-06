import React, { Component } from 'react'

class TextInput extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: ''
    }
  }

  handleChange (event) {
    if(event.target.value.length === 0) this.props.updateState(null);
    else{this.props.updateState(event.target.value);}
  }

  render () {
    return (
      <div>
        <input
          type={this.props.type}
          placeholder={this.props.placeHolder}
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default TextInput