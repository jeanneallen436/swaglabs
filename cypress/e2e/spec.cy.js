// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

import '../support/commands.js';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

describe('My First Test', () => {
  it('Logs in and adds item to cart', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.url().should('include', '/v1');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').contains('Username is required');
    cy.get('[data-test="username"]').type(USERNAME);
    cy.get('[data-test="username"]').should('have.value', USERNAME)
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').contains('Password is required');
    cy.get('[data-test="password"]').type(PASSWORD).should('have.value', PASSWORD);
    cy.get('#login-button').click();
    // assume logged in
    cy.url().should('include', 'inventory');
    // click on backpack
    // look at the next value (>)
    // cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('#item_4_title_link').find('.inventory_item_name').click();
    // add backpack to cart
    let numItemsInCart = 0;
    // cy.get('.btn_primary').click();
    // ++numItemsInCart;

    cy.addToCart(numItemsInCart).then((num) => {
      numItemsInCart = num;
      cy.log(num);
      cy.get('.shopping_cart_badge').should('have.text', numItemsInCart);

      //remove item from cart
      // cy.get('.btn_secondary').click();
      // numItemsInCart--;
      // cy.get('.shopping_cart_badge').should('not.exist');
    });
    // numItemsInCart++;
    //check cart icon to make sure counter bubble has appeared   
    

  });
});