import {test,expect} from "@playwright/test"

test("test1",{tag:["@smoke"]},async ()=>{

    //by default all tests will execute..using tags...we can categoriese tests and can run based on tags
    //while specifying tags in run command..seqence in imprtant
    //--grep @smoke@sanity
    //--grep @smoke --grep-invert @sanity  --wantto execute test belongs to only smoke..but it shoud not with regression.. 
    //ie test belongs to 2 suites...then execlude..execlue sanity

    console.log("smoke------")

});

test("test22",{tag:["@smoke","@sanity"]},async ()=>{

    console.log("smoke sanity reg----")

});

test("test3",{tag:["@reg"]},async ()=>{

    console.log("reg------")

});

test("test4",{tag:["@smoke","@sanity","@reg"]},async ()=>{

    console.log("smoke sanity reg----")

});