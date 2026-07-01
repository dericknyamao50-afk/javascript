//javascript scope
//javascript scope determines the visisbility of a function
//there 2 scopes 
// 1.Global scope
//2. local scope
// global scope-function declared outside any function
//local scope-function declared inside the {code block}
//example of global scope
const pi=3.142 //global scope
function areaOfCircle(r) {
   return pi*r*r 
}
console.log(areaOfCircle(7));


//local scope-A variable declared inside a function and it can only
//be used inside that function{}
//example
function greet() {
    let name="deroh";
    console.log(name);
    
    
}
greet();

//procedure
let name="Michael";
function sayMyName() {
    console.log(`${name}line:28`);
    name="Jackson"
    console.log(`${name}line:31`);
    if (true) {name="mercy";
        console.log(`${name}line:28`);
        
    }
    console.log(`${name} line 33`);
    let name="vicky";
    let name="tess";
    
    
}
sayMyName();



