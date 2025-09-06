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

  get firstAddToCartBtn() { 
  return this.page.getByRole('button', { name: /add to cart/i }).first(); 
  }

  get cartIcon() { 
    return this.page.getByTestId('shopping-cart-link'); 
  }

  async addFirstItemToCart() {
    await test.step('Add first item to cart', async () => {
      await this.firstAddToCartBtn.click();
    });
  }

  async openCart() {
    await test.step('Open cart page from header', async () => {
      await this.cartIcon.click();
    });
  }
}
