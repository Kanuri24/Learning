// Implicit Type Conversion (Type Coercion)
console.log("Hello" + 5);   // "Hello5"
console.log("10" + 2);      // "102"
console.log("The answer is " + true); // "The answer is true"
console.log("5" + 2 + 3);   // "523"
console.log(5 + 2 + "3");   // "73"

// Number Conversion in Implicit Type Coercion
console.log("5" - 2);   // 3
console.log("10" * 2);  // 20
console.log("6" / "2"); // 3
console.log("10" - true); // 9
console.log("10" - false); // 10

// Boolean Conversion in Implicit Type Coercion
console.log(Boolean(1));  // true
console.log(Boolean("Hello"));  // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(0));  // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

// Logical Operators
console.log(10 || "Hello"); // 10
console.log(0 || "Hello");  // "Hello"
console.log(0 && "Hello");  // 0
console.log(1 && "Hello");  // "Hello"

// Explicit Type Conversion
console.log(Number("123"));    // 123
console.log(Number("123abc")); // NaN
console.log(parseInt("123abc")); // 123
console.log(parseFloat("12.34px")); // 12.34
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log(Number(null));   // 0
console.log(Number(undefined)); // NaN

// Convert to String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log(String(true));  // "true"
console.log(String(false)); // "false"
console.log(String(null));  // "null"
console.log(String(undefined)); // "undefined"

// Convert to Boolean
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("Hello"));  // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Special Cases
console.log(Number(null));  // 0
console.log(Number(undefined));  // NaN
console.log("5" == 5);  // true (Type Coercion)
console.log("5" === 5); // false (Strict Comparison)

// User Input Example
let age = "25"; // Simulating user input
age = Number(age);
console.log(age + 5);  // 30
