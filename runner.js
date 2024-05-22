let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 17;
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
  console.log(`your race starts at 9:30 and your race number is ${raceNumber}`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(
    `you race will be at 11:00 and your race number is ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `your race will be at 12:30 and your race number is ${raceNumber}`
  );
} else {
  console.log("please come and see us at the regestration desk.");
}
