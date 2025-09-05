import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Auth', () => {
  test('valid login → lands on inventory', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await inventory.expectLoaded();
  });

  test('invalid login → shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', 'bad_password');
    await login.expectErrorContains('Username and password do not match');
  });
});
