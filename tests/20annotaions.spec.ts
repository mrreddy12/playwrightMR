import {test,expect} from "@playwright/test"

test.only("annotations1",async ({page})=>{
    // only
    //skip

     console.log("test1-only")

});

test.skip("annotations2",async ({page})=>{
    // only
    //skip
   
  console.log("test2-skip")

});
