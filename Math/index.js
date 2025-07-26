// Math = built in object that provides a collection of the properties and methods

console.log("====== Math Object Properties (Constants) ======");
console.log("Math.E:", Math.E);
console.log("Math.PI:", Math.PI);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.SQRT1_2:", Math.SQRT1_2);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);

console.log("\n====== Math Rounding Methods ======");
console.log("Math.abs(-9):", Math.abs(-9));
console.log("Math.ceil(4.2):", Math.ceil(4.2));
console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.trunc(4.9):", Math.trunc(4.9));

console.log("\n====== Min, Max, and Random ======");
console.log("Math.min(5, 2, 9, -4):", Math.min(5, 2, 9, -4));
console.log("Math.max(5, 2, 9, -4):", Math.max(5, 2, 9, -4));
console.log("Math.random() * 10:", Math.random() * 10); // Random between 0–10

console.log("\n====== Power and Root ======");
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(25):", Math.sqrt(25));
console.log("Math.cbrt(27):", Math.cbrt(27));

console.log("\n====== Trigonometric Functions ======");
let angleRad = Math.PI / 4; // 45 degrees
console.log("Math.sin(π/4):", Math.sin(angleRad));
console.log("Math.cos(π/4):", Math.cos(angleRad));
console.log("Math.tan(π/4):", Math.tan(angleRad));
console.log("Math.asin(1):", Math.asin(1));
console.log("Math.acos(0):", Math.acos(0));
console.log("Math.atan(1):", Math.atan(1));
console.log("Math.atan2(1, 1):", Math.atan2(1, 1));

console.log("\n====== Logarithmic & Exponential ======");
console.log("Math.exp(1):", Math.exp(1));        // e^1
console.log("Math.log(Math.E):", Math.log(Math.E));
console.log("Math.log10(1000):", Math.log10(1000));
console.log("Math.log2(8):", Math.log2(8));

console.log("\n====== Sample Real-Life Use Case ======");
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(`Area of a circle with radius ${radius}:`, area.toFixed(2));
