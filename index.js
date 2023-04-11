/*Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/


const myAge = 28;

let earlyYears = 2;

earlyYears = earlyYears * 10.5;

// subtracting 2 years from my age since it's accounted for different (4 years vs 10.5 years)
let laterYears = myAge - 2;

// calculating dog years of year 2+ (4x)
laterYears = laterYears * 4;

//self-explanatory
myAgeInDogYears = laterYears + earlyYears;
// getting my name to lower case
myName = "Raul".toLowerCase();

console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
