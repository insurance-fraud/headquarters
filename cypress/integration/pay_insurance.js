describe('Paying for plans', () => {
  it('cheapest one', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Welcome to merch-it')

    cy.get('[data-cy=email]').type('test@example.com')
    cy.get('[data-cy=10000]').click()

    cy.contains('Checkout')
    cy.get('[data-cy=submit]').click()

    cy.get('[data-cy=pan]').type('1')
    cy.get('[data-cy=securityCode]').type('1')
    cy.get('[data-cy=cardHolderName]').type('1')
    cy.get('[data-cy=expirationDate]').type('1')

    cy.get('[data-cy=pay]').click()

    cy.contains("Congrats, you've bought insurance from us!")
  })

  it('fails when user has no money on his account', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Welcome to merch-it')

    cy.get('[data-cy=email]').type('test@example.com')
    cy.get('[data-cy=10000]').click()

    cy.contains('Checkout')
    cy.get('[data-cy=submit]').click()

    cy.get('[data-cy=pan]').type('4')
    cy.get('[data-cy=securityCode]').type('4')
    cy.get('[data-cy=cardHolderName]').type('4')
    cy.get('[data-cy=expirationDate]').type('4')

    cy.get('[data-cy=pay]').click()

    cy.contains("Oops! The transaction didn't go through, sorry.")
  })
})
