// function that takes a number as its only parameter and returns true or false if it is even or not
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(23));