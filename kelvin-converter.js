//this is a project that allows you to say how warm it is in kelvin and will retern the temp in different ways in the console. i hope to be able to make an interactive page where people can place the temp and mesument that they want and it will retern on the page as aposed to in the console.
// this is the focasted temp in kelvin.
const kelvin = 256;
// to work out the celsius i have taken the kelvin and taken 273 of of it, and stored this in a variable as well
const celsius = kelvin - 273;
console.log(`the temp is ${celsius} in celsius`);
//this takes the mathmaical formula to change celsius into fahrenheit and stores the answer
let fahrenheit = celsius * (9 / 5) + 32;
//this rounds to the neares whole number
fahrenheit = Math.floor(fahrenheit);
//this posts the answer
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//this is the newton scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`the temp is ${newton} on the newton scale`);
