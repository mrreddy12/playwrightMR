import {test,expect} from "@playwright/test"

test("simple alert validation",async ({page})=>{

      //by default...playwright will handle alerts...but we cant validate..messages if we dont use below..dialog handler
      //but we can't validate..dialog boxe text...if we dont use dialog handler...we have to enable befre open alert window
     // alerts wont appear during run time....if we dont use..wait time.
      await page.goto("https://mrreddyautomation.com/alerts/");
      await page.locator("//span[text()='Alert']").click();

      page.on("dialog", async dialog => {
        let s=dialog.message();
        console.log("mes is...",s);
        await page.waitForTimeout(3000);
        dialog.accept();
     
      });

      await page.locator("//input[@value='alert']").click(); 

      
     // await page.waitForTimeout(3000);

});


test("confirm alert validation",async({page})=>{

  //by default...playwright will handle alerts...but we cant validate..messages if we dont use below..dialog handler
  //but we can't validate..dialog boxe text...if we dont use dialog handler...we have to enable befre open alert window

  await page.goto("https://mrreddyautomation.com/alerts/");
  await page.locator("//span[text()='Confirm']").click();

  //we can use single quote  or double quite for description
  page.on("dialog", async dialog => {
    let s=dialog.message();
    console.log("mes is...",s);
    await page.waitForTimeout(3000);
    dialog.accept();
   // dialog.dismiss();
  });

 
  await page.locator("//input[@value='confirm']").click(); 

await page.waitForTimeout(3000);

})

test("Prompt alert validation",async({page})=>{

  //by default...playwright will handle alerts...but we cant validate..messages if we dont use below..dialog handler
  //but we can't validate..dialog boxe text...if we dont use dialog handler...we have to enable befre open alert window

  await page.goto("https://mrreddyautomation.com/alerts/");
  await page.locator("//span[text()='Prompt']").click();

  page.on("dialog", async dialog => {
    let s=dialog.message();
    console.log("mes is...",s);
    await page.waitForTimeout(3000);
    dialog.accept("testUser");
    //dialog.dismiss();
  });

 
  await page.locator("//input[@value='prompt']").click(); 

await page.waitForTimeout(3000);

});