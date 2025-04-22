import {Browser,test,expect,chromium} from "@playwright/test"



test("storage State: to save authenticaiton state",async ({page})=>{
  //It is the process of store and reuse authentication/Logged-in state
  //advs: saves a lot of time
  //steps:
  //1.capture user session: login to applciaion and store in user session in json file  using page context
  //2. reuse in other method:   use browser fixure and specify json file name for browser context
  //3.create page from browser cotnext
  //Note: simply remember browser context concept.only we have to specify file name for browsercontext
  // we can run from global settings as well..see it later00000000000000000000000000000
  
  //npx playwright test 16storageSession.spec.js --headed --project=chromium

  // browser Context...we will use in 2 situations : 1.for browser context(new sessions) 2. for storageContext 

  // const browserContext1=await browser.newContext();
  // const  page=await browserContext1.newPage();
  await page.goto("https://mrreddyautomation.com/wp-admin");
  await page.locator("//input[@id='user_login']").fill("admin");
  await page.locator("//input[@id='user_pass']").fill("$P$Bb7omlcjirid1fF4OTj");
  await page.locator("//input[@id='wp-submit']").click();
   await page.waitForTimeout(3000);
  await page.context().storageState({path: "login.json"});

 
  //webContext=await
      await page.waitForTimeout(3000);
   
   });
  
   test.only("Reuse Login user session",async ({browser})=>{

    //const page=await browser.newContext({storageState: "userSession.json"}).newPage();
    const browserContext =await browser.newContext({storageState: "login.json"});
   
    
    const page=await browserContext.newPage();
    //await page.waitForTimeout(3000);
    await page.goto("https://mrreddyautomation.com/wp-admin");
    //console.log(await page.title());
  
      //  page.locator("//input[@type='submit']").click();
      await page.waitForTimeout(3000);
    
 
     
     });
    
