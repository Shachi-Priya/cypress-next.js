/// <reference types="cypress"/>

const favoritePlatforms = ['Toptal', 'Upwork', 'Malt', 'Comet'];

context('Platforms', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/platforms');
  });

  it('should render the platforms page and display the favorite platforms', () => {
    cy.get('ul>li').each((item, index) => {
      cy.wrap(item).should('contain.text', favoritePlatforms[index]);
    });
  });
});