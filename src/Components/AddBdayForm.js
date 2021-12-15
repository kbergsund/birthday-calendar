import React, { Component } from 'react'
import './AddBdayForm.css'

export default class AddBdayForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      month: '',
      day: ''

    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitBirthday = event => {
    event.preventDefault();
    const newBirthday = {
      id: Date.now(),
      name: this.state.name,
      month: parseInt(this.state.month),
      day: parseInt(this.state.day)
    }
    this.props.addBirthday(newBirthday)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      month: '',
      day: ''
    })
  }

  render() {
    return (
      <form>
        <div className='label-input-container'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)} />
        </div>
        <div className='label-input-container'>
          <label htmlFor='month'>Month:</label>
          <input type='number' id='month' name='month'
            value={this.state.month}
            onChange={event => this.handleChange(event)} />
        </div>
        <div className='label-input-container'>
          <label htmlFor='day'>Day:</label>
          <input type='number' id='day' name='day'
            value={this.state.day}
            onChange={event => this.handleChange(event)} />
        </div>
        <button onClick={event => this.submitBirthday(event)}>Add this birthday!</button>
      </form>
    )
  }
}