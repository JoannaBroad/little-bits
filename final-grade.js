const finalGrade = (midterm, final, homework) => {
  if (midterm >= 100 && final >= 100 && homework >= 100) {
    let total = (midterm + final + homework) / 3;
    if (total >= 90) {
      return "A";
    } else if (total >= 80) {
      return "B";
    } else if (total >= 70) {
      return "C";
    } else if (total >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
};
console.log(finalGrade(99, 92, 95));
