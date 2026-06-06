import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test.describe('Checkout Process', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
  });

  test('user can complete checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage      = new CartPage(page);
    const checkoutPage  = new CheckoutPage(page);

    // ADD TO CART
    await inventoryPage.addToCart('sauce-labs-backpack');

    // GO TO CART
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');

    // START CHECKOUT
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('/checkout-step-one.html');

    // FILL DETAILS
    await checkoutPage.fillDetails('Sabyasachi', 'Ghosh', '700001');
    await checkoutPage.continue();
    await expect(page).toHaveURL('/checkout-step-two.html');

    // VERIFY PRODUCT IN SUMMARY
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // FINISH
    await checkoutPage.finish();
    await expect(page).toHaveURL('/checkout-complete.html');

    // VERIFY CONFIRMATION
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});