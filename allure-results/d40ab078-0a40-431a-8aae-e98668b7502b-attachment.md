# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart >> user can add a product to cart @smoke @regression
- Location: tests\cart.spec.ts:15:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')
    - locator resolved to <input value="" type="text" id="user-name" name="user-name" autocorrect="off" data-test="username" autocapitalize="none" placeholder="Username" class="input_error form_input"/>
    - fill("standard_user")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
  18 |     await this.page.goto('/');
  19 |   }
  20 | 
  21 |   async login(username: string, password: string): Promise<void> {
> 22 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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