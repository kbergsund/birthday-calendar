describe('Birthday Homepage tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display all expected homepage information', () => {
    cy.get('h1').contains('Birthdays')

    .get('.bday-form').get('form').children()
      .contains('label', 'Name')
      .next().get('input')
      .next().contains('label', 'Month')
      .next().get('input')
      .next().contains('label', 'Day')
      .next().get('input')
      .next().contains('button', 'Add this birthday!')

    .get('.bday-container').children()
      .get('section').children()
        .contains('h2', 'January')
        .next().contains('p', 'Kari: 1/13')
      .get('section').children()
        .contains('h2', 'February')
        .next().contains('p', 'Leah: 2/10')
  })

  it('should update the form input values as a user types', () => {
    cy.get('form')
    .get('#name').type('Kyra')
    .should('have.value', 'Kyra')
    
    .get('#month').type('8')
    .should('have.value', '8')

    .get('#day').type('14')
    .should('have.value', '14')
  })

  it('should add a birthday via form & display it on re-render', () => {
    cy.get('form')
    .get('#name').type('Kyra')    
    .get('#month').type('8')
    .get('#day').type('14')  
    .get('button').click()

    cy.get('.bday-container').get('section').children()
      .contains('h2', 'August')
      .next().contains('p', 'Kyra: 8/14')
  })
})