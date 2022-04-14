// Primitive data types.

let word = 'Javascript'
word[0] = 'P'

console.log(word); // Javascript

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo); // true

let js = 'Javascript'
let py = 'Python'

console.log(js == py); // false

let lightOn = true
let ligthOff = false

console.log(lightOn == ligthOff); // false


// Non-primitive data types.

let nums = [1, 2, 3]
nums[1] = 10
console.log(nums)

//let numbers = [1, 2, 3]

//console.log(nums == numbers)

let userOne = {
    name: 'Mesut',
    role: 'Admin',
    country: 'Turkey'
}

// let userTwo = {
//     name: 'Mesut',
//     role: 'Admin',
//     country: 'Turkey'
// }

//console.log(userOne == userTwo);

let numbers = nums;
let userTwo = userOne;

console.log(nums == numbers)
console.log(userOne == userTwo);


// numbers
let age = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in m/s2
let mass = 72; // mass in Kilogram
//const PI = 3.14; // pi a geometrical constant

// More examples
const boilingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, boilingPoint, bodyTemp);



// Math Object
const PI = Math.PI;
console.log(PI);

console.log("round PI: ", Math.round(PI)); // 3 to round values to the nearest number.
console.log("round 9.18: ", Math.round(9.81)); // 10
console.log("floor PI: ", Math.floor(PI)); // 3 rounding down
console.log("ceil PI: ", Math.ceil(PI)); // 4 rounding up
console.log("min: ", Math.min(-4, 3, -2, 10, 25, 14)); // returns the minimum value.
console.log("max: ", Math.max(-1, 4, 7, 10, 40, 12)); // returns the maximum value.

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log("random: ", randNum);


// Let us create random number between 0 to 10
const num = Math.floor(Math.random() * 11);
console.log("random + floor: ", num);

//Abdolute value
console.log("abs -10: ", Math.abs(-10));

//Square root
console.log("sqrt 100: ", Math.sqrt(100))
console.log("sqrt 2: ", Math.sqrt(2));

// Power
console.log("pow 4,2: ", Math.pow(4, 2));
console.log("Math E: ", Math.E);

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log("log(2): ", Math.log(2));
console.log("log(10): ", Math.log(10));


// Returns the natural logarithm of 2 and 10 respectively
console.log("LN2: ", Math.LN2);
console.log("LN10: ", Math.LN10);


// Trigonometry
Math.sin("sin 0:", 0);
Math.sin("sin 60:", 60);

Math.cos("cos 0:", 0);
Math.cos("cos 60: ", 60);