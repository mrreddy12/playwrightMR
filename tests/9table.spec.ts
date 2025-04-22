import {test,expect} from "@playwright/test"

test("table validation",async ({page})=>{

      //rowCount..colCount...celldata..
      //rowData..colData..tableData....check later
 
    await page.goto("https://mrreddyautomation.com/playground/");
 
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Web Tables']").click();

    //we can use child or descdenant
    //table...for cols ...add thead for table xpath
    //for rest...add tbody for table xpath

  //row count
    let rows=await page.$$("//table[@id='empInfo']/tbody/descendant::tr");
    console.log("row count is :", await rows.length);
  //col count
    let cols=await page.$$("//table[@id='empInfo']//thead/descendant::th");
    console.log("col  count is :", await cols.length);

  //get cell data
    let cellData=await page.locator("//table[@id='empInfo']/tbody/descendant::tr[2]/td[1]").textContent();
    console.log("cell data is :"+cellData);
        //"//table[@id='kt_datatable_zero_configuration']/tbody/descendant::tr["+row+"]/td["+col+"]"

  
})