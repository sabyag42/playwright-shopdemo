import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { validUsers, invalidUsers } from './data/users';

test.describe('Login — Data Driven', () => {

  // Runs once for EACH user in the validUsers array
  for (const user of validUsers) {
    test(`valid login: ${user.description} @regression`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      await expect(page).toHaveURL('/inventory.html');
    });
  }

  for (const user of invalidUsers) {
    test(`invalid login: ${user.description} @regression`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      // Should NOT navigate away
      await expect(page).not.toHaveURL('/inventory.html');

      // Should show error
      const error = await loginPage.getErrorMessage();
      expect(error).toContain(user.errorMessage);
    });
  }

});