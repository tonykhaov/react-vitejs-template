describe('Smoke test', () => {
  it('should navigate through about and home pages', () => {
    cy.visit('/')

    // About page
    cy.findByRole('link', { name: /go to about/i }).click()
    cy.url().should('include', '/about')

    // Homepage
    cy.findByRole('link', { name: /go to homepage/i }).click()
    cy.url().should('include', '/')

    // About
    cy.findByRole('link', { name: /go to about/i }).click()
    cy.url().should('include', '/about')
  })
})
