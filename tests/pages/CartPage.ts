import { Page } from '@playwright/test';

export class CartPage {

  private page: Page;

  private cartItems      = '.inventory_item_name';
  private checkoutButton = '[data-test="checkout"]';

  constructor(page: Page) {
    this.page = page;
  }

  async getItemNames(): Promise<string[]> {
    return await this.page.locator(this.cartItems).allTextContents();
  }

  async removeItem(productId: string): Promise<void> {
    await this.page.click(`[data-test="remove-${productId}"]`);
  }

  async proceedToCheckout(): Promise<void> {
    await this.page.click(this.checkoutButton);
  }

  async getItemCount(): Promise<number> {
    return await this.page.locator(this.cartItems).count();
  }

}