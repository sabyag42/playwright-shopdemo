import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

test.describe('Cart', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
  });

  test('user can add a product to cart @smoke @regression', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage      = new CartPage(page);

    await inventoryPage.addToCart('sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');

    const items = await cartPage.getItemNames();
    expect(items).toContain('Sauce Labs Backpack');
  });

  test('user can remove a product from cart @smoke @regression', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage      = new CartPage(page);

    // ADD TWO ITEMS
    await inventoryPage.addToCart('sauce-labs-backpack');
    await inventoryPage.addToCart('sauce-labs-bike-light');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // GO TO CART
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');

    // REMOVE BOTH
    await cartPage.removeItem('sauce-labs-backpack');
    await cartPage.removeItem('sauce-labs-bike-light');

    // VERIFY CART EMPTY
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
    const count = await cartPage.getItemCount();
    expect(count).toBe(0);
  });

});