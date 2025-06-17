import {test,expect} from '@playwright/test';

test('Locating Multiple Elements', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    // const links = await page.$$('a');
    // for(const link of links)
    // {
    //     console.log(await link.textContent());
    // 
    //}
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
    for(const product of products)
    {
        console.log(await product.textContent());
    }
})