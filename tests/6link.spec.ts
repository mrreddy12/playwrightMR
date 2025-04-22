import {test,expect} from "@playwright/test"

test("links",async ({page})=>{


    //click...first.click....last.click.....nth(0).click...getAtribute('title')

    await page.goto("https://mrreddyautomation.com/playground/");
 
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Links']").click();
    

   // await page.locator("//a[text()='Facebook']").click();
   //await page.locator("//a[text()='Google']").first().click();
    //await page.locator("//a[text()='Google']").last().click();
   //await page.goBack();
    await page.locator("//a[text()='Google']").nth(0).click();
})