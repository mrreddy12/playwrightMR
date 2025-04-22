import {test,expect} from "@playwright/test"

test("listbox",async ({page})=>{

        //key value pair in between{}
    //selectoption({lable:"cypress"})..selectoption({indes:1})...index starts with 0
    //default value:textcontenet/inputvalue(write proper xpath for th)
    //select vaue..inputvalue  getting value..for this better to dprovde same name for value as well..in small ca
   //$$ : its simiar to find elements in slenium...returns list of elements..ie array...then use lenght
   //test.setTimeout(0)..added in for loop for degbuging
   //check multiselect..bootstrap..autoselection later
    await page.goto("https://mrreddyautomation.com/playground/");
 
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Drop Down']").click();
    await page.locator("//select[@name='Automation']").selectOption({label:"Cypress"});//baed on labe
    await page.locator("//select[@name='Automation']").selectOption({index:0});//based on index
    const ss=await page.locator("//select[@name='Automation']").inputValue();//selected vaue: it will get vaueprop..if no value than it gets item
    console.log("selected vaue is : ",ss)
    await page.waitForTimeout(5000);
    const s=await page.locator("//select[@name='Automation']/option[@selected='selected']").textContent();//delfault valuae
      console.log("Default  vlaue is ",s)

    await page.waitForTimeout(5000);
  // find no.of elements
    const options=await page.$$("//select[@name='Automation']//child::option");
    console.log("list size is :", await options.length);
    let status=false;
    //get all list items
    for(let option of options)
    {
     test.setTimeout(0)
      let ss=await option.textContent();
      console.log(ss)
    }

    for(let option1 of options)
      {
        await page.waitForTimeout(5000);
        let strOption:any=await option1.textContent();
        if(strOption.includes("Cypress"))
        {
          status=true;  //instead of count..useing status
          break;
        }
      }
      expect(status).toBeTruthy();
     // expect(status).toBeFalsy();
   
})