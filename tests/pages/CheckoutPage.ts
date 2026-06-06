import { Page } from '@playwright/test';

export class CheckoutPage {

  private page: Page;

  private firstNameInput = '[placeholder="First Name"]';
  private lastNameInput  = '[placeholder="Last Name"]';
  private postalCodeInput = '[placeholder="Zip/Postal Code"]';
  private continueButton = '[data-test="continue"]';
  private finishButton   = '[data-test="finish"]';
  private confirmation   = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async fillDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continue(): Promise<void> {
    await this.page.click(this.continueButton);
  }

  async finish(): Promise<void> {
    await this.page.click(this.finishButton);
  }

  async getConfirmationMessage(): Promise<string | null> {
    return await this.page.locator(this.confirmation).textContent();
  }

}