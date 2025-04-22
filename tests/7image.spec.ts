import {test,expect} from "@playwright/test"

test("images",async ({page})=>{


    //click...first.click....last.click.....nth(0).click...getAtribute('title')

    await page.goto("https://mrreddyautomation.com/playground/");
 
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Images']").click();
  
const title=await page.locator("//img[@title='Facebook']").getAttribute("title");//serch with Login in dev tool
console.log("title is ",title);
await page.locator("//img[@title='Facebook']").click();
   // await page.locator("//a[text()='Facebook']").click();

   // await page.goBack();
    //await page.locator("//a[text()='Google']").nth(0).click();
})