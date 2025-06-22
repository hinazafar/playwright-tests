import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.getByRole('button', { name: ' From' }).click();
  await page.getByRole('textbox', { name: 'From' }).fill('Delhi');
  await page.getByRole('button', { name: ' From  Delhi From  Delhi' }).click();
});