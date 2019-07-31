Feature('Pay for insurance');

Scenario('Pay for first option', (I) => {
  I.amOnPage('http://localhost:3000')
  I.fillField('[data-cy=email]', 'test@example.com')
  I.click("[data-cy='10000']")
  I.click('[data-cy=submit]')

  I.waitForText('PAN');

  I.fillField('[data-cy=pan]', '2')
  I.fillField('[data-cy=securityCode]', '2')
  I.fillField('[data-cy=cardHolderName]', '2')
  I.fillField('[data-cy=expirationDate]', '2')
  I.click('[data-cy=pay]')

  I.waitForText("Congrats, you've bought insurance from us!");
});

Scenario('Balance is too low', (I) => {
  I.amOnPage('http://localhost:3000')
  I.fillField('[data-cy=email]', 'test@example.com')
  I.click("[data-cy='10000']")
  I.click('[data-cy=submit]')

  I.waitForText('PAN');

  I.fillField('[data-cy=pan]', '4')
  I.fillField('[data-cy=securityCode]', '4')
  I.fillField('[data-cy=cardHolderName]', '4')
  I.fillField('[data-cy=expirationDate]', '4')
  I.click('[data-cy=pay]')

  I.waitForText("Oops! The transaction didn't go through, sorry.");
});

