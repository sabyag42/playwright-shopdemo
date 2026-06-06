# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login with valid credentials
- Location: tests\login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <input type="submit" value="Login" id="login-button" name="login-button" data-test="login-button" class="submit-button btn_action"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [active] [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | 
  4  | test('Login with valid credentials', async ({page}) => {
  5  | 
  6  | 
  7  |     await page.goto('/');
  8  | 
  9  |     await page.getByPlaceholder('Username').fill('standard_user');
  10 |     await page.getByPlaceholder('Password').fill('secret_sauce');
  11 | 
> 12 |     await page.getByRole('button', { name: 'Login' }).click();
     |                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 | 
  14 |     await expect(page).toHaveURL('/inventory.html');
  15 |     await expect(page.locator('.title')).toHaveText('Products');
  16 | });
```