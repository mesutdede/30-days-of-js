let channelName = 'youtube',
    channelAge = 12,
    isChannelPrivate = false,
    channelPrice = null,
    channelLocation = undefined

console.log(typeof(channelName)); // string
console.log(typeof(channelAge)); // number
console.log(typeof(4.5)); // number
console.log(typeof(isChannelPrivate)); // boolean
console.log(typeof(channelPrice)); // object
console.log(typeof(channelLocation)); // undefined



// Declare variables in multiple lines
let firstName = 'Mesut'
let lastName = 'Dede'
let maritalStatus = 'M'
let country = 'TURKEY'
let age = 34

console.log(firstName, lastName, maritalStatus, country, age);

// Declare variables in single line
let name = 'Mesut',
    secondName = 'Dede',
    status = 'M',
    city = 'İstanbul',
    birthDate = new Date(1988, 10, 10)


console.log(name, secondName, status, city, birthDate);

let myAge = 34,
    yourAge = 35

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);