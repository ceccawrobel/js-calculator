var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var BMI = function(height, weight) {
  return weight / (height * height);
}

var celFar = function(tempCel) {
  return (tempCel * (9/5)) + 32;
}

var farCel = function(tempFar) {
  return (tempFar - 32) * (5/9);
}

// var number1 = parseInt(prompt("enter a number"));
//
// var number2 = parseInt(prompt("enter another number"));

// alert(divide(number1, number2));


// var height = parseInt(prompt("enter your height in inches")) / 39.37;
//
// var weight = parseInt(prompt("enter your weight in pounds")) / 2.205;
//
// alert(BMI(height, weight));

var tempCel = parseInt(prompt("enter a temperature in degrees Celsius"));

var tempFar = parseInt(prompt("enter a temperature in degrees Farenheit"));

alert(tempCel + " degrees Celsius is " + celFar(tempCel) + " degrees Farenheit.");

alert(tempFar + " degrees Farenheit is " + farCel(tempFar) + " degrees Celsius.");
