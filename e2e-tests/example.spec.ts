import { test, expect } from '@playwright/test';

test('Home page appears normally', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Our Mission')).toBeVisible();
});
