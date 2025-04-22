import {test,expect} from "@playwright/test"

test("shadowDOM",async ({page})=>{
    // dom inside dom is known as shadow dom
   // Shadow dom is two types 1.open shadow DOM 2.closed shadow DOM
    // shadow dom starts with <shadow rooT> 
    // Open shadow DOm elements can be auotmated with CSS
    //Closed DOM elements can't be automated(purpose security)..consider as non automabtable
    // Note: we cant automate elements under closed shadow dom(2nd img)
    // Elements with in the shsadawo dom can identifyed by CSS only

    
    await page.goto("https://books-pwakit.appspot.com/");
 
    await page.locator("#input").fill("hello");//type
    const s=await page.locator(".books-desc").innerText();
    await page.waitForTimeout(3000);
       console.log("data is :",s)
    await page.waitForTimeout(3000);

});