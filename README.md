<<<<<<< HEAD
# Interview
=======
# Playwright + BDD + TypeScript Interview Framework

Cloneable starter framework using Playwright Test, playwright-bdd, TypeScript, Gherkin, Page Objects, fixtures, browser projects, failure artifacts, and CI.

## Structure

```text
features/              Gherkin scenarios
steps/                 step definitions
pages/                 Page Object Model
fixtures/              typed Playwright/BDD fixtures
utils/                 environment/config helpers
tests/                 optional classic Playwright tests
playwright.config.ts   Playwright + BDD configuration
```

## Setup

```bash
npm install
npx playwright install
```

## Run

```bash
npm test
npm run test:headed
npm run test:ui
npm run test:smoke
npm run typecheck
npm run report
```

Change the application under test with `BASE_URL`.

## Interview explanation

- Feature files describe business behavior in Gherkin.
- Step definitions translate Gherkin into executable Playwright actions.
- Page Objects encapsulate selectors and UI behavior.
- Fixtures inject typed Page Objects into steps and keep scenarios isolated.
- `defineBddConfig()` connects feature files and step definitions to the Playwright runner.
- Browser projects provide Chromium, Firefox, and WebKit coverage.
- Trace, screenshot, and video capture help diagnose failures.
- Tags such as `@smoke` support targeted execution.
- Prefer semantic locators and stable test IDs over brittle XPath.
- Keep scenario state isolated so tests can run in parallel.
>>>>>>> 6495163 (Initial commit)
