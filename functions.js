"use strict";
// function add(num1 : string,num2 : string){
//     return num1 + num2;
// }
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1.5, 1.5));
// OR
const sub = (num1, num2) => num1 + num2;
console.log(sub(10, 5));
function sum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(sum(5, 6));
function addition(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
// let addre = [2,4,5,6,7,3,4,5];
console.log(addition(5, 15, 5, 5, 5, 5, 5, 5, 5, 5));
