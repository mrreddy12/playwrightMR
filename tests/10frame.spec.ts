import {test,expect} from "@playwright/test"

test("frame validation",async ({page})=>{

      //no.of frames
      //enter value in text field--inside frame
      //nested frames---see later
 
    await page.goto("https://mrreddyautomation.com/frames/");

    let frames=await page.frames(); // try to find this with $$(iframe) like lincount
    console.log("frames count is :", await frames.length);
    let links=await page.$$("//iframe"); 
    console.log("frames count is :", await links.length);
    //checkoutside frame
    await page.locator("//input[@name='cuit']").check();
 
  
    await page.frameLocator("//iframe[(@id='userForm')]").locator("//input[@name='text-1']").fill("testUser");
    await page.locator("//input[@name='uft']").check();
    await page.waitForTimeout(5000);

})