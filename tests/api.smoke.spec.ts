import { test, expect } from '@playwright/test';

test('API-style smoke check', async ({ request }) => {
  const response = await request.get('https://demo.playwright.dev/todomvc/');
  expect(response.ok()).toBeTruthy();
});
