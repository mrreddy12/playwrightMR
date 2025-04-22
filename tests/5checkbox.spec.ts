import {test,expect} from "@playwright/test"

test("chceckbox",async ({page})=>{

    //check...uncheck...isChecked

    await page.goto("https://mrreddyautomation.com/playground/");
 

    await page.locator("//span[text()='Check Box']").click();
    await page.waitForTimeout(5000);

    const b= await page.locator("//input[@name='cuit']").isChecked();
     console.log("visiable status : ",b);
     await page.locator("//input[@name='cuit']").check();
     const bb= await page.locator("//input[@name='cuit']").isChecked();
     await page.locator("//input[@name='cuit']").check();
     console.log("visiable status : ",bb);
     await page.locator("//input[@name='cuit']").uncheck();
     await page.waitForTimeout(5000);
})