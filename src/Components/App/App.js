import React, { Component } from 'react';
import './App.css';
import { months } from '../../months_data';
import Month from '../Month';
import AddBdayForm from '../AddBdayForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data => this.setState({
        birthdays: data
      }))
  }

  addBirthday = (newBirthday) => {
    console.log(newBirthday)
    this.setState({
      birthdays: [...this.state.birthdays, newBirthday]
    })
  }

  render() {
    const displayMonths = this.state.months && this.state.months.map(month => {
      // console.log(month + "hi")
      const bdaysInMonth = this.state.birthdays && this.state.birthdays.filter(bday => {
        console.log(bday.id, bday.month)
        return bday.month === month.id
      })
      // console.log(bdaysInMonth)
      return <Month key={month.id} month={month.name} birthdays={bdaysInMonth}/>
    })
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
          <AddBdayForm addBirthday={this.addBirthday}/>
        </div>
        <div className='bday-container'>
          {displayMonths}
        </div>
      </div>
    );
  }
}

export default App;
