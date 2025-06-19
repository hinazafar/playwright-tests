const {test,expect} = require('@playwright/test');

test('Assertions Test', async ({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register');
    
    // Page have URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    
    // Page have Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    
    //toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();
    
    //toBeEnabled() Element is enabled
    const searchElement = await page.locator('#small-searchterms');
    await expect(searchElement).toBeEnabled();

    //toBeCHecked Element is checked?
    const maleradiobutton = await page.locator('#gender-male');
    await maleradiobutton.click();
    await expect(maleradiobutton).toBeChecked();

    //toHaveAttribute Element have this attributes
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

    //toHaveText toContainText
    await expect(page.locator('.page-title h1')).toHaveText('Register'); //full text
    await expect(page.locator('.page-title h1')).toContainText('Reg');  //partial text

    //toHaveValue input has a value
    await page.locator('#Email').fill('hina.nida@gmail.com');
    await expect(page.locator('#Email')).toHaveValue('hina.nida@gmail.com');

    //toHaveCount List of elements has given length
    
})