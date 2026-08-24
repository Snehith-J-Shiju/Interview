import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['steps/**/*.ts', 'fixtures/**/*.ts'],
  importTestFrom: 'fixtures/test.ts',
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI, 
  // retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc/',
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 30_000, 
    headless: true, 
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});