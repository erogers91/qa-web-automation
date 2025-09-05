import { Page, Locator, expect, test } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly logo: Locator;
  readonly burgerMenu: Locator;
  readonly filter: Locator;

  constructor(private page: Page) {
    this.title = this.page.getByText('Products', { exact: true });
    this.logo = this.page.getByText('Swag Labs', { exact: true });
    this.burgerMenu = this.page.getByRole('button', { name: /open menu/i });
    this.filter = this.page.getByRole('combobox');
  }

  async expectLoaded() {
    await test.step('Verify Inventory page is loaded', async () => {
      await expect(this.title).toBeVisible();
      await expect(this.logo).toBeVisible();
    });
  }

  async expectFilterVisible() {
    await test.step('Verify sort filter is visible', async () => {
      await expect(this.filter).toBeVisible();
    });
  }

  async openBurgerMenu() {
    await test.step('Open burger menu', async () => {
      await this.burgerMenu.click();
    });
  }
}
