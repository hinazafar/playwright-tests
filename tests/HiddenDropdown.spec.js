import {test,expect} from '@playwright/test';

test('Hidden Dropdown', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    await page.waitForTimeout(5000);

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options)
    {
        const title = await option.textContent();
        //console.log(text);
        if(title.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
        await page.waitForTimeout(5000);

})