const {test, expect} = require('@playwright/test');

test('Handle Multi Dropdowns', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select single or multiple options from multi select dropdown
    //await page.selectOption('#colors',['Blue','Red','Yellow']);
    //Assertions
    // 1) Check number of options
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    // 2) Check number of options using JS array
    const options =await page.$$('#colors option');
    console.log("Total color options are: ",options.length);
    await expect(options.length).toBe(7);

    // 3) Presence of option/value in dropdown
    const content =await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    // Negative Assertion
    const content =await page.locator('#colors').textContent();
    await expect(content.includes('Black')).toBeFalsy(); //will pass, since black is not in options


    await page.waitForTimeout(5000);
})