const {test,expect} = require ('@playwright/test');

test('Bootstrap Dropdown',async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.click('.multiselect');

    // 1) Check number of options
    // const options = await page.locator('ul>li label input');
    // await expect(options).toHaveCount(11);

    // 2) Check number of options through array
    //const options = await page.$$('ul>li label input');
    //await expect(options.length).toBe(11);

    // 3) select one/multiple options fron dropdown
    const options = await page.$$('ul>li label');
    for(const option of options)
    {
        const value = await option.textContent();
        //console.log(value);
        if(value.includes('Angular') || value.includes('Java'))
            option.click();

    }
    // 4) De-select one/multiple options fron dropdown
    //const options = await page.$$('ul>li label');
    for(const option of options)
    {
        const value = await option.textContent();
        //console.log(value);
        if(value.includes('HTML') || value.includes('CSS'))
            option.click();

    }
    

    await page.waitForTimeout(5000);
})