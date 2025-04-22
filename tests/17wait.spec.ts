import {test,expect} from "@playwright/test"

test("wait check",async ({page})=>{
   //Wait 
   //1.Playwright default timeout : 30 secs
   //2.SetDefaultWaitTime: we can change/override default wait time(page.setDefaultTimeout(10000))---implicitwait
   //3.waitForTimeout(3000);its static wait ....page.waitForTimeout(3000);---like thread;sleep
   //4.waitFor: page.locator("//input[@name='rr']").waitFor({state: "visible",timeout: 5000});//change time and check 2000...5000...10000 like that
        //  Note: 2 args state and timeout.. it wont use default timeout..in tis case its 5 secs only
   //5.config
    
   // waitforTimeout,waitFor....config:actionTimeout

    //seems best practice is : use default time 30 secs..it not sufficiernt increase that time with..see 15th line
    //   or we can specify in config file like : timeout : 20000...its for test..but for action
    //    actionTimeout:5000,..check for different ones
    // we can specify it in beforeAll for entire project: https://playwright.dev/docs/test-timeoutsr



    //console : timeout error:     TimeoutError: locator.waitFor: Timeout 10000ms exceeded.

 await page.goto("https://mrreddyautomation.com/playground/");
   // explicit wait
   await page.locator("//input[@name='name']").click();
   await page.locator("//input[@name='name']").waitFor({state: "visible",timeout: 5000});//change time and check 2000...5000...10000 like that
  // await page.locator("//input[@name='rr']").waitFor({timeout: 5000});
//     await page.locator("//input[@name='name']").clear(); //clear
   // await page.locator("//input[@name='rr']").fill("hello");//type

    await page.waitForTimeout(3000);//static wait
    page.setDefaultTimeout(10000);
})