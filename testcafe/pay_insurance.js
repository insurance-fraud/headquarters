import { Selector } from 'testcafe';

fixture `Insurance`
  .page `http://localhost:3000`;

test('Pay for first option', async t => {
  await t
    .typeText('[data-cy=email]', 'test@example.com')
    .click("[data-cy='10000']")
    .click('[data-cy=submit]')

    .typeText('[data-cy=pan]', '2')
    .typeText('[data-cy=securityCode]', '2')
    .typeText('[data-cy=cardHolderName]', '2')
    .typeText('[data-cy=expirationDate]', '2')

    .click('[data-cy=pay]')
    .expect(Selector('[data-cy=successBox]').innerText).contains(
      "Congrats, you've bought insurance from us!"
    );
});

test('Balance is too low', async t => {
  await t
    .typeText('[data-cy=email]', 'test@example.com')
    .click("[data-cy='10000']")
    .click('[data-cy=submit]')

    .typeText('[data-cy=pan]', '4')
    .typeText('[data-cy=securityCode]', '4')
    .typeText('[data-cy=cardHolderName]', '4')
    .typeText('[data-cy=expirationDate]', '4')

    .click('[data-cy=pay]')
    .expect(Selector('[data-cy=errorBox]').innerText).contains(
      "Oops! The transaction didn't go through, sorry."
    );
});
