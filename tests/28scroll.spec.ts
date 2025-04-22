import {test,expect} from "@playwright/test"

test("scroll validation",async ({page})=>{

      //scroll to element
      //scroll top to bottom..bottom to top
      //scroll left to right..right to left
      //element actions not required.seems...javasscript will take care
 
    await page.goto("https://mrreddyautomation.com/frames/");
  
    //await page.locator("//input[@name='cuit']").scrollIntoViewIfNeeded();
    await      page.evaluate("window.scrollBy(0, 1000)");// top to bottom
     await page.waitForTimeout(5000);
    page.evaluate("window.scrollBy(0, -1000)"); //bottom to top

    // page.evaluate("window.scrollBy(1000, 0)"); //left to right
    // page.evaluate("window.scrollBy(-1000, 0)");//right to left
    //page.evaluate("document.getElementById('Login').click();");
    //page.evaluate("document.getElementById('selenium').click();");
    //        page.evaluate("document.getElementById('loc').value='chennai';");
    //        page.evaluate("document.getElementById('loc').style.background='yellow';");


    await page.locator("//input[@id='Login']").scrollIntoViewIfNeeded();



})