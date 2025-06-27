import {test, expect} from '@playwright/test'

test ('Keybpard Actions',async ({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    //await page.locator("//textarea[@name='text1']").fill('Welcome to automation'); //OR
    await page.type("//textarea[@name='text1']",'Welcome to Automation');
    //Ctrl + A
    await page.keyboard.press('Control+A');
    //Ctrl+C
    await page.keyboard.press('Control+C');
    //tab
    await page.keyboard.down('Tab');
    //Ctrl+V
    await page.keyboard.press('Control+V');
    await page.click("//button[@id='recaptcha']");
    await page.waitForTimeout(5000);
})