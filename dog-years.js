// setting up my age for the calculation
const myAge = 30;
// this is the set up for the early years of a dogs life
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//this is taking the early years off of the starting age.
let laterYears = myAge - 2;
//this takes the remaing years and times it by 4 the most known differece of life for dogs.
laterYears *= 4;
//this adds the early years and later years togather
const myAgeInDogYears = earlyYears + laterYears;
//this takes my name and puts it in lower case.
let myName = "Joanna Broad".toLowerCase();
//this prints my name, age and dog age in one statment.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
