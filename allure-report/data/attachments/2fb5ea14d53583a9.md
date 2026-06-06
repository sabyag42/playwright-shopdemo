# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart >> user can remove a product from cart @smoke @regression
- Location: tests\cart.spec.ts:29:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |   private page: Page;
  6  |   private usernameInput: Locator;
  7  |   private passwordInput: Locator;
  8  |   private loginButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.usernameInput = page.getByPlaceholder('Username');
  13 |     this.passwordInput = page.getByPlaceholder('Password');
  14 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  15 |   }
  16 | 
  17 |   async goto(): Promise<void> {
> 18 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  19 |   }
  20 | 
  21 |   async login(username: string, password: string): Promise<void> {
  22 |     await this.usernameInput.fill(username);
  23 |     await this.passwordInput.fill(password);
  24 |     await this.loginButton.click();
  25 |   }
  26 | 
  27 |   async getErrorMessage(): Promise<string | null> {
  28 |     return await this.page.locator('[data-test="error"]').textContent();
  29 |   }
  30 | 
  31 | }
```