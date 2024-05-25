const colorMesage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "The shirt is your favorite color";
  } else {
    return "That is a nice color";
  }
};
console.log(colorMesage("blue", "blue"));