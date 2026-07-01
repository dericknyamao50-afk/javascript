//functions help use reuse code
//using the syntax is function()then a code block
//A function execute only when called
//
//examples

function areaOfTriangle(base, height) {
  console.log(`base,height is ${base}its type ${typeof base}`);
  console.log(`height is ${height}its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(`for triangle with base ${base}and height ${height}area ${area}`);
}
areaOfTriangle();
areaOfTriangle(20);

function timeAlert() {
  const currentDate = new Date();
  alert(`timestamp:${currentDate.toISOString()}`);
}
timeAlert(); //to call a function use the function name then brackets

//without return
function faith(a,b) {
    let sum=a+b;
    console.log(sum);
    
    
}
faith(6,7);

//with return
function maureen(a,b) {
    let sum=a*b;
    return sum;

}
let result=maureen(10,20);
console.log(result);



