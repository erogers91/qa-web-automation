import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { roles } from '../fixtures/roles';

test.describe('Cart functionality', () =>{
    test('User can add an item to cart and see it in Cart page', async ({ page }) =>{
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.goto();
        await login.login(roles.standard_user.username, roles.standard_user.password);

        await inventory.expectLoaded();
        await inventory.addFirstItemToCart();
        await inventory.openCart();

        await cart.expectLoaded();
        await cart.expectHasItems(1);
    });

    test('User can remove an item from the Cart page', async ({ page })=> {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.goto();
        await login.login(roles.standard_user.username, roles.standard_user.password);

        await inventory.addFirstItemToCart();
        await inventory.openCart();

        await cart.expectLoaded();
        await cart.expectHasItems(1);

        await cart.removeFirstItem();
        await cart.expectHasItems(0);
    })

    test('User can go back and continue shopping from the Cart page', async ({ page })=>{
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.goto();
        await login.login(roles.standard_user.username, roles.standard_user.password);

        await inventory.openCart();
        await cart.expectLoaded();

        await cart.continueShopping();
        await cart.expectBackOnInventory();
        
        await inventory.expectLoaded();
    })
});