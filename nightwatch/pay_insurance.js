module.exports = {
  tags: ['insurance'],

  'Pay for first option' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000);

    client.expect.element('body').to.be.present;

    client.setValue("[data-cy=email]", "test@example.com")
      .click("[data-cy='10000']")
      .click("[data-cy=submit]")
      .waitForElementVisible("[data-cy=pan]")
      .setValue("[data-cy=pan]", '2')
      .setValue("[data-cy=securityCode]", '2')
      .setValue("[data-cy=cardHolderName]", '2')
      .setValue("[data-cy=expirationDate]", '2')
      .click("[data-cy=pay]")
      .assert.containsText("[data-cy=successBox]",
        "Congrats, you've bought insurance from us!")

    client.end();
  },

  'Balance is too low' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000);

    client.expect.element('body').to.be.present;

    client.setValue("[data-cy=email]", "test@example.com")
      .click("[data-cy='10000']")
      .click("[data-cy=submit]")
      .waitForElementVisible("[data-cy=pan]")
      .setValue("[data-cy=pan]", '4')
      .setValue("[data-cy=securityCode]", '4')
      .setValue("[data-cy=cardHolderName]", '4')
      .setValue("[data-cy=expirationDate]", '4')
      .click("[data-cy=pay]")
      .assert.containsText("[data-cy=errorBox]",
        "Oops! The transaction didn't go through, sorry.")

    client.end();
  },
};
