console.log("Hello World! I am sai sri kanuri")
console.log("I'm currently doing Masters in Computer Science in University of North Texas");

let number = 7;
console.log(number);






//Type Conversions
//Implicit Type Conversion - JS automatically converts data types when needed.
let a = "5" + 3;  // "53" (number converted to string)
let b = "5" - 2;  // 3 (string converted to number)
console.log(a);
console.log(b);

//Explicit Type Conversion - You manually convert data types using built-in methods.
//a. Convert to Number:
let num1 = Number("123"); // 123
let num2 = parseInt("123px"); // 123
let num3 = parseFloat("12.34"); // 12.34
console.log(num1);
console.log(num2);
console.log(num3);

//b. Convert to String:
let str = String(123); // "123"
let str2 = (123).toString(); // "123"
console.log(str);
console.log(str2);

//c. Convert to Boolean:
let bool1 = Boolean(1); // true
let bool2 = Boolean(0); // false
let bool3 = Boolean(""); // false
let bool4 = Boolean("hello"); // true
console.log(bool1);
console.log(bool2);
console.log(bool3);
console.log(bool4);

