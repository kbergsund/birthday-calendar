import './Month.css'

const Month = ({ month, birthdays }) => {
  const formattedBdays = birthdays && birthdays.map(bday => {
    // console.log(bday.id + "bday")
    return <p key={bday.id}>{bday.name}: {bday.month}/{bday.day}</p>
  })

  return (
  <section>
    <h2>{month}</h2>
    <p>{formattedBdays}</p>
  </section>
  )
}

export default Month;