import {test,expect,chromium} from "@playwright/test"


test("fie upload",async ({page})=>{
  //single file:;  
  //multiple files: .within []..with comma separator..
  //
  
     await page.goto("https://mrreddyautomation.com/widgets/");
     await page.waitForTimeout(3000);
     await page.locator("//span[text()='Upload and Download']").click();
     await page.waitForTimeout(3000);
      page.locator("//input[@id='file']").setInputFiles("E:\\ss.txt");
     // page.locator("//input[@id='file-submit']").click();
  
      await page.waitForTimeout(3000);
   
   });
  
   test.only("multiple fie upload",async ({page})=>{

  
   
    await page.goto("https://mrreddyautomation.com/widgets/");
     await page.waitForTimeout(3000);
     await page.locator("//span[text()='Upload and Download']").click();
       await page.waitForTimeout(3000);
        page.locator("//input[@id='files']").setInputFiles(["E:\\rr.txt","E:\\ss.txt"]);
      //  page.locator("//input[@type='submit']").click();
      await page.waitForTimeout(3000);
    
 
     
     });
    
