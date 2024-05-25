const howOld = (age , year) => {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  const yearDifference = thisYear - year;
  const newAge = age + yearDifference;
  if (newAge < age) {
    return `you will be ${newAge} in the year ${year}`;
  } else if (newAge < 0){
    return `the year ${year} was ${-newAge} years before you were born`;
  } else{
    return `you were ${newAge} in the year ${year}`
  }
}
console.log(howOld(100, 2000));