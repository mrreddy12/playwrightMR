import {test,expect} from "@playwright/test"

test("button",async ({page})=>{
    //isVisible..isEsnable...click..dblclick
    await page.goto("https://mrreddyautomation.com/playground/");
 // it my comment
    //its my second cooment
    // its my thire comment

    await page.locator("//span[text()='Buttons']").click();
   await page.waitForTimeout(5000);

    const b= await page.locator("//input[@id='Log']").isVisible();
     console.log("visiable status : ",b);
     const b2= await page.locator("//input[@id='Login']").isEnabled();
     console.log("enable status ",b2);
     
     const b3= await page.locator("//input[@id='Login']").isDisabled();
     console.log("enable status ",b3);
    //  const b4 =await page.locator("//input[@id='Login']").innerText();
    //  console.log("innerhtml code is: ",b4);
   
     await page.locator("//input[@id='ccc']").click();
     
    //  let c=await page.locator("//input[@id='Login']");
    //  c.click();
    //  await page.waitForTimeout(5000);
    //  await page.locator("//input[@id='Login']").dblclick();
    //  await page.locator("//span[text()='Check Box']").click();
    //  await page.waitForTimeout(3000);
 
     
})
