import {test,expect} from "@playwright/test"

test.only("houver and double click",async ({page})=>{
    // hover()...locator.hover()
    // button: right   :  localotr.click({button : 'right'})
    // dblclick; locator.dblclick()
    // dragAnddrop:  locator(sourtceLocator)).dragTo(targetlocator)
//$ npx playwright test 18mouseActions.spec.js --headed --project=chromium
    await page.goto("https://mrreddyautomation.com/interactions/");
    await page.locator("//span[text()='Double Click']").click();
   // await page.locator("//button[text()='Double-click me']").hover();
    await page.waitForTimeout(3000);
   // await page.locator("//button[text()='Double-click me']").dblclick();//already used this mehtod in button...but now wrting at one place..mouse related
const s=await page.locator("//p[@id='demo']").textContent();
       console.log("status message is : ",s)
 

    await page.waitForTimeout(3000);

});
test("ritht click",async ({page})=>{
    // hover()...locator.hover()
    // button: right   :  localotr.click({button : 'right'})
    // dblclick; locator.dblclick()
    // dragAnddrop:  locator(sourtceLocator)).dragTo(targetlocator)

    await page.goto("https://mrreddyautomation.com/interactions/");
    await page.locator("//span[text()='Right Click']").click();
    await page.waitForTimeout(3000);
    
    //RightClick
    await page.locator("//div[@id='contextMenu']").click({button: "right"});

    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {

        let s=dialog.message();
        console.log("mes is...",s);
        await page.waitForTimeout(3000);

        dialog.accept();
     
      });
  
    page.locator("//span[text()='JavaScript']").click();
////ul[contains(@class,'context')]/child::li[//span[text()='JavaScript']"

    await page.waitForTimeout(5000);

});


test("drag and drop",async ({page})=>{
    // hover()...locator.hover()
   //  button: right   :  locator.click({button : 'right'})
    // dblclick; locator.dblclick()
    // dragAnddrop:  locator(sourtceLocator)).dragTo(targetlocator)

    await page.goto("https://mrreddyautomation.com/interactions/");
    await page.locator("//span[text()='Drag and Drop']").click();
     await page.waitForTimeout(3000);
     await page.locator("//img[@id='drag1']").dragTo( page.locator("//div[@id='div1']"));//serch with Login in dev tool
     await page.waitForTimeout(3000);
   
});

test("keyboard actions",async ({page})=>{
    // keyoboad : press(for two actions),up and down for othe keys)
    // button: right   :  localotr.click({button : 'right'})
    // dblclick; locator.dblclick()
    // dragAnddrop:  locator(sourtceLocator)).dragTo(targetlocator)

    await page.goto("https://mrreddyautomation.com/playground/");
     await page.waitForTimeout(3000);

     //page.locator("//input[@id='user']").press("Enter");
   //  await page.locator("//input[@id='user']").press("Tab");
        await page.locator("//input[@id='name']").fill("automation");
        await page.waitForTimeout(3000);
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Control+C");
        await page.waitForTimeout(3000);
       await page.keyboard.press("Tab");
       //await page.keyboard.up("Tab");
         await page.keyboard.press("Tab");
         await page.waitForTimeout(3000);
       //await page.keyboard.up("Tab");
       await page.waitForTimeout(3000);
       await page.locator("//textarea[@id='message']").click();

         await page.keyboard.press("Control+V");
         await page.waitForTimeout(3000);
   
});