import {test, expect} from '@playwright/test'

test('Date Picker', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.fill('#datepicker',"06/11/2025"); //Directly fill date value

    //Handle the datePicker element
    const year='2024',month='March',date='20';
    await page.click('#datepicker');

    while(true)
    {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        if(currentMonth == month && currentYear == year)
        {
            break;
        }
        else
        {
            await page.locator('[title="Prev"]').click();
        }

    }
        // //Now select date after month and year selection
        // // 1) Using arrays
        // const dates = await page.$$('.ui-state-default');
        // //console.log(dates[4].textContent());
        // for(const dt of dates)
        // {
        //     if(await dt.textContent()==date)
        //     {
        //         await dt.click();
        //         break;
        //     }
        // }

        // date selection without loop or array

        await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

    await page.waitForTimeout(5000);
})