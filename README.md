# Playwright Shop Demo

A production-ready end-to-end test automation framework for e-commerce testing using Playwright, demonstrating modern QA best practices and industry-standard architecture patterns.

## 📋 Overview

This project automates testing of the Sauce Labs demo e-commerce application, covering critical user workflows including authentication, product browsing, shopping cart management, and checkout processes. It's designed to showcase enterprise-level testing practices with robust test organization, data-driven testing, and comprehensive reporting.

## 🏗️ Architecture

### Page Object Model (POM)
- **`tests/pages/LoginPage.ts`** - Handles user authentication interactions
- **`tests/pages/InventoryPage.ts`** - Manages product browsing and cart interactions
- **`tests/pages/CartPage.ts`** - Controls shopping cart operations
- **`tests/pages/CheckoutPage.ts`** - Manages checkout workflow

### Test Suites
- **`tests/login.spec.ts`** - Basic login validation
- **`tests/login-data-driven.spec.ts`** - Multi-scenario login testing (valid & invalid users)
- **`tests/cart.spec.ts`** - Shopping cart add/remove operations
- **`tests/checkout.spec.ts`** - Checkout process validation

### Supporting Files
- **`tests/helpers/auth.ts`** - Reusable authentication helper function
- **`tests/data/users.ts`** - Test data for data-driven testing (valid/invalid user credentials)
- **`tests/config/`** - Configuration files
- **`playwright.config.ts`** - Playwright configuration for browsers, reporters, and test settings

## ✨ Key Features

- **Cross-Browser Testing**: Automated tests run on Chromium and Firefox
- **Data-Driven Testing**: Tests parameterized with multiple data sets for comprehensive coverage
- **Smart Reporting**: 
  - HTML test reports
  - Allure reporting for detailed test metrics
  - Screenshots and videos on test failures
  - Trace files for debugging
- **CI/CD Ready**: Configuration supports both local and CI/CD environments
- **Test Tagging**: Tests tagged with `@smoke` and `@regression` for selective execution

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sabyag42/playwright-shopdemo.git
cd playwright-shopdemo

# Install dependencies
npm install
