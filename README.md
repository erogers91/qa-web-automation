#  QA Web Automation (Playwright + Yarn)

This project is a starter automation framework for **React/Web apps** using [Playwright](https://playwright.dev/).  
It includes Page Object Models, role-based tests, environment variables, and GitHub Actions CI integration.

---

## Features
- End-to-end UI tests with [Playwright Test](https://playwright.dev/docs/intro).
- **Page Object Model (POM)** structure for maintainability.
- Role-based testing with entitlements (`admin` vs `user`).
- Environment variable support (`.env` for local, GitHub Secrets for CI).
- GitHub Actions workflow for **CI/CD**.
- HTML reports with test results, screenshots, and traces.

---

## Project Structure
qa-web-automation/

├─ .github/workflows/ci.yml

├─ tests/

│ ├─ e2e/ # End-to-end tests

│ │ ├─ auth.spec.ts

│ │ └─ entitlement.spec.ts

│ ├─ pages/ # Page Objects

│ │ ├─ LoginPage.ts

│ │ └─ InventoryPage.ts

│ ├─ fixtures/ # Roles, test data

│ │ └─ roles.ts

│ └─ utils/ # Helpers

├─ .env.example # Example environment vars

├─ playwright.config.ts # Playwright config

├─ package.json

├─ yarn.lock

└─ README.md

## 🛠 Setup
### 1. Clone & install dependencies
```bash
git clone https://github.com/erogers91/qa-web-automation.git
cd qa-web-automation
yarn install
npx playwright install --with-deps
```

### 2. Configure environment variables
Create a .env file based on .env.example:

BASE_URL=https://www.saucedemo.com/

ADMIN_USER=standard_user

ADMIN_PASS=secret_sauce

USER_USER=problem_user

USER_PASS=secret_sauce

### 3. Running Tests
Run all tests (headless):
yarn test

Run in headed mode:
yarn test:headed

Open the Playwright Test UI:
yarn test:ui

View HTML report:
yarn report

### 4. CI/CD (GitHub Actions)
Workflow: .github/workflows/ci.yml

Runs on every push to main and every pull request.

Installs dependencies, runs Playwright tests, and uploads an HTML report as an artifact.

Uses GitHub Secrets for credentials (BASE_URL, ADMIN_USER, etc.).

### 5. Example of report
<img width="998" height="899" alt="image" src="https://github.com/user-attachments/assets/5d9e952a-4e92-4f8c-8787-6feaa2ced199" />

