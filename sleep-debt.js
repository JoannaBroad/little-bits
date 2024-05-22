// calculater for sleep debt
// refactoring 
// const getSleepHours = day => {
//   if(day === 'monday'){
//     return 8
//   } else if (day === 'tuesday'){
//     return 7
//   }
//   else if (day === 'wednesday'){
//     return 5
//   }
//   else if (day === 'thursday'){
//     return 9
//   }
//   else if (day === 'friday'){
//     return 4
//   }
// };

// // console.log(getSleepHours('friday'));

// const getActualSleepHours = () => 
// getSleepHours('monday')+ getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');

const getActualSleepHours =() => 8 + 7 + 5 + 9 + 4 + 7 + 5;

// console.log(getActualSleepHours());
// refactoring
//  const getIdealHours = () => {
//   const idealHours = 8;
//   return idealHours * 7;
//  }
//  console.log(getIdealHours());
const getIdealHours = idealHours => idealHours * 7;
const calculateSleepDebt = () => {
 const actualSleepHours = getActualSleepHours();
 const idealHours = getIdealHours(8);
 if (actualSleepHours === idealHours){
   return 'You have enough sleep';
 } else if (actualSleepHours > idealHours){
   return 'You should be more productive';
 } else {
   console.log('You got ' + (idealHours - actualSleepHours) + ' hours less sleep than you need this week, Get some rest.');
 }
}
calculateSleepDebt();