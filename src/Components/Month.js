import './Month.css'

const Month = ({ month, birthdays }) => {
  const formattedBdays = birthdays && birthdays.map(bday => {
    return <p key={bday.id}>{bday.name}: {bday.month}/{bday.day}</p>
  })

  return (
  <section>
    <h2>{month}</h2>
    <div className='birthdays'>
      {formattedBdays}
    </div>
  </section>
  )
}

export default Month;