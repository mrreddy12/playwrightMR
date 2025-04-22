import {test,expect} from "@playwright/test"


test.only("basic auth",async ({page})=>{

   await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
   await page.waitForTimeout(3000);
   const s=page.locator("//p[contains(text(),'Congratulations')]").innerText();
   console.log("mess is : ", s)

   await page.waitForTimeout(3000);
   page.close();

 });
