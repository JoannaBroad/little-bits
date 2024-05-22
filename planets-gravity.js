const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.375;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid planet Entry. try: Mercury, Venus, Mars, Jupiter, Saturn";
  }
};
console.log(calculateWeight(100, "Venus"));
