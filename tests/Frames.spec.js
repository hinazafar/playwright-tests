const {test, expect} = require('@playwright/test');

test('Handling Frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames count
    const allFrames = await page.frames();
    //console.log("Frames Count: ",allFrames.length);

    //Approach 01: Using name/URL of frame //accessing frames/elements in frames
    //const frame1 = await page.frame('value of name attribute'); //if name attribute available
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']",'Hello');

    // Approach 02: Using frame Locator

    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    await inputbox.fill('Hello');

    await page.waitForTimeout(5000);

})