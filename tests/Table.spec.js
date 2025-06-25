import {test, expect} from '@playwright/test';

test('handling table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) total number of rows and columns
    const columns = await table.locator('thead tr th');
    console.log("No of Columns:",await columns.count());
    await expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log('No f Rows:',await rows.count());
    await expect(await rows.count()).toBe(5);

    // 2) select checkbox for Smartwatch //single product

    // const filteredRow = await rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'
    // });
    // await filteredRow.locator('input').check();

    // 3) Select multiple options/products by using reuseable function in JS

    // await selectProducts(rows, page, 'Smartwatch');
    // await selectProducts(rows, page, 'Laptop');

    // 4) Print all product details //using looping statement
    // for(let i=0;i<await rows.count();i++)
    // {
    //     const row = await rows.nth(i);
    //     const tds = await row.locator('td');
    //     for(let j=0;j<await tds.count()-1;j++)
    //     {
    //        console.log(await tds.nth(j).textContent());

    //     }
    // }

    // 5) Read data form all the pages in the table // pagination
    const pages = await page.locator('.pagination li a');
    console.log('Number of Pages in the Table: ', await pages.count());

    for(let p=0; p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        for(let i=0;i<await rows.count();i++)
        {
            const row = await rows.nth(i);
            const tds = await row.locator('td');
            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(5000);
    }
    await page.waitForTimeout(5000);
})

// Function to select product/option
async function selectProducts(rows, page, pname)
{
    const filteredRow = await rows.filter({
        has:page.locator('td'),
        hasText:pname
    });
    await filteredRow.locator('input').check();

}