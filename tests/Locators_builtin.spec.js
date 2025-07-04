import {test,expect} from '@playwright/test';
/*
These are the recommended built-in locators.

    page.getByRole() to locate by explicit and implicit accessibility attributes.
    page.getByText() to locate by text content.
    page.getByLabel() to locate a form control by associated label's text.
    page.getByPlaceholder() to locate an input by placeholder.
    page.getByAltText() to locate an element, usually image, by its text alternative.
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Builtin Locators',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAltText
    const logo = await page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    //getByPlaceholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //getByRole , for actionable elements buttons,link,

    await page.getByRole('button',{type:'submit'}).click();

    const text =await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log("login text: ",text);
    //getByText locator

    await expect(await page.getByText(text)).toBeVisible();

})