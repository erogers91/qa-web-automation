import { Page, Locator, expect, test } from '@playwright/test';

export class CartPage {
    readonly title: Locator;
    readonly logo: Locator;
    readonly burgerMenu: Locator;
    readonly cartIcon: Locator;
    readonly qtyTag: Locator;
    readonly descriptionTag: Locator;
    readonly checkoutBtn: Locator;
    readonly continueShoppingBtn: Locator;
    readonly firstRemoveBtn: Locator;

    constructor(private page: Page) {
        this.title = this.page.getByText('Your Cart', { exact: true });
        this.logo = this.page.getByText('Swag Labs', { exact: true });
        this.burgerMenu = this.page.getByRole('button', { name: /open menu/i });
        this.cartIcon = this.page.getByTestId('shopping-cart-link');

        this.qtyTag = this.page.getByText('QTY', {exact:true});
        this.descriptionTag = this.page.getByText('Description', {exact:true});

        this.checkoutBtn = this.page.getByRole('button', { name: /checkout/i });
        this.continueShoppingBtn = this.page.getByRole('button', {name: /continue shopping/i});
        this.firstRemoveBtn = this.page.getByRole('button', {name: /remove/i}).first();
    }

    async expectLoaded() {
        await test.step('Verify cart page is loaded', async () => {
        await expect(this.title).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.qtyTag).toBeVisible();
        await expect(this.descriptionTag).toBeVisible();
        });
    }

    async openBurgerMenu() {
        await test.step('Open burger menu', async () => {
        await this.burgerMenu.click();
        });
    }

    async cartIconExists(){
        await test.step('Cart Icon is present and clickable', async () => {
        await expect(this.cartIcon).toBeVisible();
        await this.cartIcon.click();
        });
    }

    async proceedToCheckout() {
        await test.step('Click Checkout button', async () => {
        await this.checkoutBtn.click();
        });
    }

    async continueShopping() {
        await test.step('Click Continue Shopping button', async () => {
        await this.continueShoppingBtn.click();
        });
    }

    get cartItems() {
        return this.page.locator('.cart_item');
        }

    async expectHasItems(count: number) {
        await test.step(`Verify cart has ${count} item(s)`, async () => {
        await expect(this.cartItems).toHaveCount(count);
        });
    }

    async removeFirstItem() {
        await test.step('Remove first item from cart', async () => {
        await this.firstRemoveBtn.click();
        });
    }

    get checkoutHeader() {
        return this.page.getByText('Checkout: Your Information', { exact: true });
    }

    async expectAtCheckoutStepOne() {
        await test.step('Verify we are on Checkout: Your Information', async () => {
        await expect(this.checkoutHeader).toBeVisible();
        await expect(this.page).toHaveURL(/checkout-step-one/);
        });
    }

    async expectBackOnInventory() {
        await test.step('Verify we are back on Inventory page', async () => {
        await expect(this.page.getByText('Products', { exact: true })).toBeVisible();
        await expect(this.page).toHaveURL(/inventory/);
        });
    };
}