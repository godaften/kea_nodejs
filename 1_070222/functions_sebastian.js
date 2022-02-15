// gammel
function doingSomething (anyFunctionsReference, name) {
    anyFunctionsReference(name);
}
const running = name => console.log(name + " is running"); 
doingSomething(running, "Seb");

// ny
function doingSomething1 (anyFunctionsReference, name) {
    return anyFunctionsReference(name);
}

const running1 = name => name + " is running"; 
console.log(doingSomething1(running1, "Seb"));


// implement using doingsomething1
// drinking and other action

const drinking = name => name + " is drinking";
console.log(doingSomething1(drinking, "Seb"));

// endnu sejere kode med dynamisk action + name
function doingSomething2 (anyFunctionsReference, name, action) {
    return anyFunctionsReference(name, action);
}

const actionWithName = (name, action) => name + " is " + action;
console.log(doingSomething2(actionWithName, "Seb", "eating"));

const result = doingSomething((name => name + " is studying", "Seb"))
console.log(result)