describe('Inputs and submit buttons', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Can add or delete in input', () => {
  it('can submit a name', () => {
    cy.get('input[name="terms"]').check()
    cy.get('input[name="username"]').type('heyo')
    cy.get('input[name="username"]').should('have.value', 'heyo')
    cy.get('input[name="email"]').type('me@me.com')
    cy.get('input[name="email"]').should('have.value', 'me@me.com')
    cy.get('input[name="password"]').type('password')
    cy.get('input[name="password"]').should('have.value', 'password')
    cy.get('button').click()

    cy.get('input[name="username"]').should('have.value', '')
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
  })
})