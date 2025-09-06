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

  // test('problem_user login', async ({ page }) => {
  //   const login = new LoginPage(page);
  //   await login.goto();
  //   await login.login('problem_user', 'secret_sauce');
  //   // await login.expectErrorContains('Username and password do not match');
  // });

  // test('performance_glitch_user login', async ({ page }) => {
  //   const login = new LoginPage(page);
  //   await login.goto();
  //   await login.login('performance_glitch_user', 'secret_sauce');
  //   // await login.expectErrorContains('Username and password do not match');
  // });

  // test('error_user login', async ({ page }) => {
  //   const login = new LoginPage(page);
  //   await login.goto();
  //   await login.login('error_user', 'secret_sauce');
  //   // await login.expectErrorContains('Username and password do not match');
  // });

  // test('visual_user login', async ({ page }) => {
  //   const login = new LoginPage(page);
  //   await login.goto();
  //   await login.login('visual_user', 'secret_sauce');
  //   // await login.expectErrorContains('Username and password do not match');
  // });
});
