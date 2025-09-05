import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly burgerMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Products', { exact: true });
    this.burgerMenu = page.getByRole('button', { name: /open menu/i });
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }
}
