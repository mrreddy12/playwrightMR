import {test,expect} from "@playwright/test"


test("Tabbed window validation with promiseall",async ({page})=>{
   //follow second for now
   //not required browser cotnext and context fixure....if we add them..bit confuse
// we have two models...two methos here...for now focus on second one
   //tabbed window:
   //before click link.... use page.waitForEvent("popup");...sotre in var..
   //after click link...again assing old var to other new var...use new var to interact with new page 
   //..we have promo
 
   await page.goto("https://mrreddyautomation.com/playground/");
   await page.locator("//span[normalize-space(text())='Windows']").click();
 
   await page.waitForTimeout(3000);
 
 // click on hte link and wait for the new tab to get triggered
 let [popup]=await  Promise.all([
    page.waitForEvent('popup'),
   await page.getByRole('link', { name: 'Tabbed Window' }).click()
 ]);
 // wait for the new page to load
    await popup.waitForLoadState();
 
   //interact with new page
 
   await popup.getByPlaceholder('Enter username').fill('mrrrr');
   await popup.waitForTimeout(3000);
   await popup.close();
  //again interact with old page
   await page.waitForTimeout(3000);
   await page.getByRole('button', { name: 'New Window' }).click();
   await page.waitForTimeout(3000);

 
 
 
 });
test.only("Tabbed window validation",async ({page})=>{

      await page.goto("https://mrreddyautomation.com/playground/");
      await page.locator("//span[normalize-space(text())='Windows']").click();
      await page.waitForTimeout(3000);
       let popup =  page.waitForEvent("popup");//empty s
  
      await page.getByRole('link', { name: 'Tabbed Window' }).click()
      //new page
      //const tabPage =  await popup;
      let tabPage =  await popup;
      await tabPage.getByPlaceholder('Enter username').fill('dfasdf');
      await tabPage.waitForTimeout(3000);
      await tabPage.close();
     //again old page
      await page.waitForTimeout(3000);
      await page.getByRole('button', { name: 'New Window' }).click();
      await page.waitForTimeout(3000);


});




