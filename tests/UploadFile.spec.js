import {test, expect} from '@playwright/test';
//Reference: https://playwright.dev/docs/input#upload-files
test('Upload Single file', async ({page})=>{
    await page.goto('https://www.foundit.in/');
    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();
    await page.locator('#file-upload').setInputFiles('tests\test1.txt');
    await page.waitForTimeout(5000);
})

test('Upload Multiple files', async ({page})=>{
    
})