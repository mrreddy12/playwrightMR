import {test,expect} from "@playwright/test"

test("test1@smoke",async ({page})=>{

    //Tags are used to categoerize the tests and manage the execution
    //we can catergeize based on modules,suites, environment and browsers
    // we can execute tests/or suites based on tags
    
    //Note: if we dont specify tags/annoations..all tests will be executed when we run from command prompt
    //but through runner we can execute required test
    //while specifying tags in run command..seqence in imprtant
    
   
    //--grep @smoke@sanity
    //--grep @smoke --grep-invert @sanity  --wantto execute test belongs to only smoke..but it shoud not with regression.. 
    //ie test belongs to 2 suites...then execlude..execlue sanity

    console.log("smoke------")

});

test("test2@sanity",async ({page})=>{

    console.log("sanity-----")

});

test("@reg",async ({page})=>{

    console.log("reg------")

});

test("@smoke@sanity@reg",async ({page})=>{

    console.log("smoke sanity reg----")

});