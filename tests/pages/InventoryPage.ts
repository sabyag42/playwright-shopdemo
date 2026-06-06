import { Page } from '@playwright/test';

export class InventoryPage {

  private page: Page;

  private cartBadge      = '.shopping_cart_badge';
  private cartLink       = '.shopping_cart_link';
  private pageTitle      = '.title';

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(productId: string): Promise<void> {
    await this.page.click(`[data-test="add-to-cart-${productId}"]`);
  }

  async goToCart(): Promise<void> {
    await this.page.click(this.cartLink);
  }

  async getCartBadgeText(): Promise<string | null> {
    return await this.page.locator(this.cartBadge).textContent();
  }

  async getTitle(): Promise<string | null> {
    return await this.page.locator(this.pageTitle).textContent();
  }

}