import {test,expect} from "@playwright/test"

test("getPageInfo",async ({page})=>{
    //title...ur...content
    await page.goto("https://mrreddyautomation.com/playground/");

     console.log(await page.title());
     console.log(await page.url());
     console.log(await page.content());
     

});