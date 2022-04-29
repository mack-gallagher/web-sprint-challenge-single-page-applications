describe('Name input', function () {
  it('Correct text is added to the name box', function () {
    cy
      .visit('localhost:3000')
      .get('[id=order-pizza]')
      .click()
      .get('[name=name]')
      .type('ABCDEFG')
      .should('have.value','ABCDEFG');
  })
})

describe('Multiple topping selection', function () {
  it('User can select multiple toppings', function () {
    cy
      .visit('localhost:3000')
      .get('[id=order-pizza]')
      .click()
      .get('[name=pepperoni]')
      .click()
      .get('[name=onions]')
      .click();
    
    cy.get('[name=pepperoni]').should('be.checked');
    cy.get('[name=onions]').should('be.checked');
  })
})

describe('Form submission', function () {
  it('User can submit the form', function () {

    cy
      .visit('localhost:3000')
      .get('[id=order-pizza]')
      .click()
      .get('[name=name]')
      .type('Gallagher')
      .get('[name=size]')
      .select('medium')
      .get('[name=pepperoni]')
      .click()
      .get('[name=olives]')
      .click()
      .get('[name=pineapple]')
      .click()
      .get('[name=onions]')
      .click()
      .get('[name=peppers]')
      .click()
      .get('[type=submit]')
      .click()

    cy.get('[name=name]').should('be.empty');
  })
})
