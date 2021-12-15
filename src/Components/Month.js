import './Month.css'

const Month = ({ month, birthdays, error }) => {
  const formattedBdays = birthdays && birthdays.length ? birthdays.map(bday => {
    return <p key={bday.id}>{bday.name}: {bday.month}/{bday.day}</p>
  }) : !error && <p className='no-birthdays'>No birthdays this month.</p>

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