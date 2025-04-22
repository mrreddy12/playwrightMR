import {test,expect} from "@playwright/test"

test("getPageInfo",async ({page})=>{
    //title...ur...content..chid branch...
    await page.goto("https://mrreddyautomation.com/playground/");

    // page.goBack();
    // page.goForward();
    // page.reload();
     console.log(await page.title());
     console.log(await page.url());
    // console.log(await page.content());//not textcontent//all content
    //await page.close();
});