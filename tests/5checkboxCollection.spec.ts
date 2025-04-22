import {test,expect} from "@playwright/test"

test("select all checkboxes",async ({page})=>{
//working with mulitple eements..colleciton of elements
    //we can use all() method  or $$..its like findElemetns in selenium
    //npx playwright test 5checkboxCollection.spec .js --headed --project=chromium

    await page.goto("https://mrreddyautomation.com/playground/");
 

    await page.locator("//span[text()='Check Box']").click();
    await page.waitForTimeout(3000);


    //let chkBoxs=await page.$$("//input[@type='checkbox']").all(); //anything is fine
 let objects=await page.$$("//input[@type='checkbox']");
    console.log("checkbox count is : ", objects.length);

    for(let object of objects)
    {
          object.check();
          await page.waitForTimeout(3000);
    }

     await page.waitForTimeout(5000);
});

test.only("select all links",async ({page})=>{
   //working with mulitple eements..colleciton of elements
       //we can use all() method  or $$..its like findElemetns in selenium
       //npx playwright test 5checkboxCollection.spec .js --headed --project=chromium
   
       await page.goto("https://mrreddyautomation.com/playground/");
    
   
       await page.locator("//span[text()='Links']").click();
       await page.waitForTimeout(3000);
   
   
       //let chkBoxs=await page.$$("//input[@type='checkbox']"); //anything is fine
    let objects=await page.$$("//a"); //tagname
       console.log("links count isv : ", await objects.length);
   
       for(let object of objects)
       {
            console.log(await object.textContent());
             await page.waitForTimeout(3000);
       }
           await page.waitForTimeout(3000);
   })