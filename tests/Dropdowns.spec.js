import {test,expect} from '@playwright/test'

test('Dropdown test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
    //await page.locator('#country').selectOption({label:'India'}); // label by using visible text
    //await page.locator('#country').selectOption('India'); //by using visible text
    //await page.locator('#country').selectOption({value:'india'}); //by using value property
    //await page.locator('#country').selectOption({index:3}); //by using index
    await page.selectOption('#country','India'); //by text

    // Assertions for Dropdowns

    // 1) Check number of options in the dropdown - Approach 1
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 1) Check number of options in the dropdown - Approach 2 //through array length
    // const options = await page.$$('#country option'); // this $$ function will return options in the form of an array
    // console.log("no of options",options.length);
    // await expect(options.length).toBe(10);

    // 2) Check presence if a specific element/option/value in the dropdown || Approach 01
    // const content = await page.locator('#country').textContent();
    // console.log("Dropdown content",content);
    // await expect(content.includes('Germany')).toBeTruthy();

    //2) Check presence if a specific element/option/value in the dropdown || Approach 02 using looping
    // const options = await page.$$('#country option'); // this $$ function will return options in the form of an array
    // let status = false;

    // for(const option of options)
    // {
    //     let value = await option.textContent();
    //     if(value.includes('Germany'))
    //     {
    //         status = true;
    //         break;
    //     }
    // }
    // await expect(status).toBeTruthy();

    // 5) Selection option from dropdown using loop
    const options = await page.$$('#country option'); // this $$ function will return options in the form of an array
    for(const option of options)
    {
        let value = await option.textContent();
        if(value.includes('Germany'))
        {
            await page.selectOption('#country',option);
            break;
        }
    }
    await page.waitForTimeout(5000);

})