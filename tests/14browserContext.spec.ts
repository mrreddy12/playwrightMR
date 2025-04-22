import {test,expect,chromium} from "@playwright/test"


test.only("Browser context for two new windows",async ({browser})=>{
  //it is the process of(it helps) creating a new pages from browser fixture (browser Context) instead of page fixure 
  // adv:we can maintaining separate seesions(no link b/w sessions)
  //till now used page fixture to work..worked with different tabs and new windows...now use browser context
  //browser context is completely different...dont relate to new window..will get confuse
  //import chromium
  //two new appications---
  //tabbed window:same browser context for creating different new pages(change second line onlye)
  //new windoes: different  browser contexts for creating different new pages(change first two lines)
  // in this process..we will create pages from browser context
  
//we can get page in in 2ways...1.pageFixture  2.browsercontext
//each page  having different browsers
//1.single browser context with different pages
//2.multiple browser cotnexts with multiple pages


let browserContext1=await browser.newContext();
let  page1=await browserContext1.newPage();
 
     await page1.goto("https://www.google.com");
     let title1=await page1.title();
      console.log("google title is :",title1);
   
     //await page.waitForTimeout(3000);
     let browserContext2=await browser.newContext();
     let  page2=await browserContext2.newPage();
     await page2.goto("https://www.facebook.com");
     let title2=await page2.title();
      console.log("facebook  title is :",title2);
  
      await page2.waitForTimeout(3000);
   
   });
  

test("Browser context for two new tabs",async ({browser})=>{
//import chromium
//two new appications---tabs...for tis use same browser context with two tabs
//each page  having same browser context

  let browserContext=await browser.newContext();
  
  let  page1=await browserContext.newPage();

 
   await page1.goto("https://www.google.com");
    let title1=await page1.title();
    console.log("google title is :",title1);
 
   //await page.waitForTimeout(3000);

  
   let  page2=await browserContext.newPage();
    
   await page2.goto("https://www.facebook.com");
   let title2=await page2.title();
    console.log("facebook  title is :",title2);

    await page2.waitForTimeout(3000);
 
 });
