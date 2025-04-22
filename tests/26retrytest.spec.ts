import {test,expect} from "@playwright/test"
let page;


test("test1",async ({page})=>{

  //retry: we can specify at test level and  config level(gloabal)
//npx playwright test 24video.spec.js --project=chromium --headed --retries=1
  await page.goto("https://mrreddyautomation.com/playground/");
 

  await page.locator("//span[text()='xx']").click();
  await page.waitForTimeout(5000);
  await page.screenshot({path:"tests/screenShot/"+Date.now()+"myScreenshot.png",fullPage:false});
 // await page.locator("//input[@id='Login']").screenshot({path:"tests/screenShot/"+Date.now()+"myScreenshot.png",fullPage:true});

});

