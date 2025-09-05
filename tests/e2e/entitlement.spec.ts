import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { roles } from '../fixtures/roles';

test.describe('Entitlements (role-based behavior)', () => {
  test('admin can log in and see inventory', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(roles.admin.username, roles.admin.password);
    await inventory.expectLoaded();
  });

  test('user logs in but (example) lacks admin-only control', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(roles.user.username, roles.user.password);
    await inventory.expectLoaded();

    // Example entitlement check (placeholder):
    // await expect(page.getByRole('button', { name: /admin panel/i })).toBeHidden();
  });
});
