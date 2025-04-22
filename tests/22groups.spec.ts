import {test,expect} from "@playwright/test"

//we can use tags at group leve as well
test.describe("Group1@tg1",async ()=>{
  test("test1",async ({page})=>{
      console.log("this is test 1")
});

test("test2@tg2",async ({page})=>{
 console.log("this is test 2")

});


});

test.describe("Group2",async ()=>{
  test("test3",async ({page})=>{

   
    console.log("this is test 3")
  
  });
  
  
  test("test4",async ({page})=>{
  
     
    console.log("this is test 4")
  
  });
  
});
