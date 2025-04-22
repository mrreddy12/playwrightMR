import {test,expect} from "@playwright/test"

test.only("textfeild",async ({page})=>{
    //iseditable...clear...fill..inputvalue

    //same for text area as well
    //verified parallel with this
    await page.goto("https://mrreddyautomation.com/playground/");
 


    await page.waitForTimeout(3000);

    const v= await page.locator("//input[@name='email']").isVisible();
    console.log("editbale status: ",v)
    const e= await page.locator("//input[@name='email']").isEnabled();
    console.log("editbale status: ",e)
   const b= await page.locator("//input[@name='email']").isEditable();
   console.log("editbale status: ",b)
     await page.locator("//input[@name='name']").clear(); 
//     await page.locator("//input[@name='name']").clear(); //clear
    await page.locator("//input[@name='name']").fill("hello1");//type
    const bb=await page.locator("//input[@name='name']").inputValue()//type
    await page.waitForTimeout(3000);  
console.log(bb)

await page.waitForTimeout(3000);
})

test("textfeild2",async ({page})=>{
    //iseditable...clear...fill..inputvalue

    //same for text area as well
    await page.goto("https://mrreddyautomation.com/playground/");
 


    await page.waitForTimeout(3000);

   const b= await page.locator("//input[@name='email']").isEditable();
   console.log("editbale status: ",b)

   const bbb= await page.locator("//input[@name='name']").isEditable();
   console.log("editbale status: ",bbb)

//     await page.locator("//input[@name='name']").clear(); //clear
    await page.locator("//input[@name='name']").fill("hello2");//type

    const bb=await page.locator("//input[@name='name']").inputValue()//type
    await page.waitForTimeout(3000);  
console.log(bb)
await page.locator("//input[@name='name']").clear(); 
await page.waitForTimeout(3000);
})

test("textfeild3",async ({page})=>{
    //iseditable...clear...fill..inputvalue

    //same for text area as well
    await page.goto("https://mrreddyautomation.com/playground/");
 


    await page.waitForTimeout(3000);

   const b= await page.locator("//input[@name='email']").isEditable();
   console.log("editbale status: ",b)

   const bbb= await page.locator("//input[@name='name']").isEditable();
   console.log("editbale status: ",bbb)

//     await page.locator("//input[@name='name']").clear(); //clear
    await page.locator("//input[@name='name']").fill("hello3");//type

    const bb=await page.locator("//input[@name='name']").inputValue()//type
    await page.waitForTimeout(3000);  
console.log(bb)
await page.locator("//input[@name='name']").clear(); 
await page.waitForTimeout(3000);//'''''''''

})