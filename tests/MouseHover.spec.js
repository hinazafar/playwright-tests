import {test,expect} from '@playwright/test'


test('Mouse Hover', async ({page})=>{

    await page.goto("https://demo.opencart.com/");
    const desktops = await page.locator("//a[normalize-space()='Desktops']");
    const macBook = await page.locator("//a[normalize-space()='Mac (1)']");

    await desktops.hover();
    await macBook.hover();

    await page.waitForTimeout(5000);
})