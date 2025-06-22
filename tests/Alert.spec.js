import {test, expect} from '@playwright/test';

test.skip('Alert with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Alert Handling //Dialog Window custom Handler before clicking the alert
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);
})

test.skip('Confirmation Dialog - Alert with OK and Cancel Options', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Confirmation Dialog Window Handler 
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //await dialog.accept(); //close by using OK button
        await dialog.dismiss(); //close by using cancel button
    })

    await page.locator('#confirmBtn').click();
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);
})

test('Prompt Dialog - Alert with OK, Cancel Options and Input Box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable prompt Dialog Window Handler 
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept('John');
        
    })

    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);
})
    