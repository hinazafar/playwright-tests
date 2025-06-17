import {expect,test} from '@playwright/test';

test('Locator',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('id=login2').click(); //locator with property
    await page.locator('#loginusername').fill('pavanol'); //locator with CSS
    await page.fill("input[id='loginpassword']",'Test@123'); //location with CSS

    // Click on login button

    await page.click("//button[normalize-space()='Log in']"); //XPath

    //Verify Logout link presence
    const logoutlink= await page.locator("//*[@id='logout2']"); //XPath
    await expect(logoutlink).toBeVisible();

    await page.close();
})