import {test,expect} from "@playwright/test"
let page;

test.beforeEach("beforeeach",async ({browser})=>{
  //page=browser.newPage();

      console.log("this is before each");

});

test.afterEach("afterEach",async ({browser})=>{

  console.log("this is after each");

});

test("test1",async ({page})=>{

  
 console.log("this is test 1")

});



test("test2",async ({page})=>{

  
  console.log("this is test 2")
 
 });
 
 