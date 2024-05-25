const numberDigits = (x) => {
 if (x <= 9 &&  x >= 0) {
    return `One digit ${x}`;
 } else if (x>=10 && x <= 99) {
    return `Two digits ${x}`;
 } else{
    return `The number is: ${x}`;
 }
}
console.log(numberDigits(8));
console.log(numberDigits(10));
console.log(numberDigits(100));
console.log(numberDigits(-1));
console.log(numberDigits(0));