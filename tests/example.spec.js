const {test, expect} = require ('@playwright/test');

test('Home Page',async({page})=>{

  await page.goto('https://www.demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log("Page Title is: ",pageTitle);

  await expect(page).toHaveTitle('STORE');

  await page.close();
})