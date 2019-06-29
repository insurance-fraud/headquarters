describe('merch-it', function() {
  it('Visits merch-it', function() {
    cy.visit('http://localhost:3000')

    cy.contains('Welcome to merch-it')
  })
})
