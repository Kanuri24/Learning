// 1. Arithmetic Operators
let a = 10, b = 5;
console.log("Arithmetic Operators:");
console.log(a + b);  // 15 (Addition)
console.log(a - b);  // 5 (Subtraction)
console.log(a * b);  // 50 (Multiplication)
console.log(a / b);  // 2 (Division)
console.log(a % b);  // 0 (Modulus)
console.log(a ** b); // 100000 (Exponentiation)

// 2. Assignment Operators
let x = 5;
x += 2; // x = x + 2
x -= 1; // x = x - 1
x *= 3; // x = x * 3
x /= 2; // x = x / 2
console.log("\nAssignment Operators:");
console.log(x); // 10

// 3. Comparison Operators
console.log("\nComparison Operators:");
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != 3);     // true (not equal)
console.log(5 > 3);      // true (greater than)
console.log(5 <= 5);     // true (less than or equal to)

// 4. Logical Operators
let y = true, z = false;
console.log("\nLogical Operators:");
console.log(y && z);  // false (AND)
console.log(y || z);  // true (OR)
console.log(!y);      // false (NOT)

// 5. Increment and Decrement Operators
let count = 5;
console.log("\nIncrement and Decrement Operators:");
console.log(count++);  // 5 (post-increment)
console.log(++count);  // 7 (pre-increment)
console.log(count--);  // 7 (post-decrement)
console.log(--count);  // 5 (pre-decrement)

// 6. Bitwise Operators
console.log("\nBitwise Operators:");
console.log(5 & 3);  // 1 (AND)
console.log(5 | 3);  // 7 (OR)
console.log(5 ^ 3);  // 6 (XOR)
console.log(~5);     // -6 (NOT)

// 7. String Operators
let greeting = "Hello";
greeting += " World!";
console.log("\nString Operators:");
console.log(greeting);  // "Hello World!"



