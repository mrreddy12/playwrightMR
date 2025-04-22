import {test,expect} from "@playwright/test"
let page;


test("test1",async ({page})=>{

  //we can capture screensots in two ways 1. through code 2.through config file(no code)

  //default : full page:false...no need to use..for redability use this
  //for element screenshot ..fullpage not reuired
  //in real time we will use only page level..no point to capture element in terms of understanding
  await page.goto("https://mrreddyautomation.com/playground/");
 

  await page.locator("//span[text()='Buttons']").click();
  await page.waitForTimeout(5000);
  await page.screenshot({path:"tests/screenShot/"+Date.now()+"myScreenshot.png",fullPage:false});//no need to specify...but readbiliy specified
  await page.screenshot({path:"tests/screenShot/"+Date.now()+"myScreenshot.png",fullPage:true});
 await page.locator("//input[@id='Login']").screenshot({path:"tests/screenShot/"+Date.now()+"myScreenshot.png",fullPage:true});


});

