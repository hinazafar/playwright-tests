import {test, expect} from '@playwright/test'

test('Mouse Double Click', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");
    await btnCopy.dblclick();

    const field2 = await page.locator('#field2');
    await expect(field2).toHaveValue('Hello World!');


    await page.waitForTimeout(5000);
})