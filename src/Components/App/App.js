import React, { Component } from 'react';
import './App.css';
import { months } from '../../months_data';
import Month from '../Month'

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data => this.setState({
        birthdays: data
      }))
  }

  render() {
    const displayMonths = this.state.months && this.state.months.map(month => {
      const bdaysInMonth = this.state.birthdays && this.state.birthdays.filter(bday => bday.month === month.id)
      return <Month key={month.id} month={month.name} birthdays={bdaysInMonth}/>
    })
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
          {/* <Form /> */}
        </div>
        <div className='bday-container'>
          {displayMonths}
        </div>
      </div>
    );
  }
}

export default App;
