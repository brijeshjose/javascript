//Write a program that converts temperatures from Fahrenheit to Celsius
//and vice versa. Ask the user for the temperature and the conversion
//direction (F to C or C to F). Calculate the Celsius temperature using the
//formula: celsius = (temperature - 32) * 5/9 Calculate the Fahrenheit
//temperature using the formula: fahrenheit = (celsius * 9/5) + 32
var temperature=35;
var celsius,fahrenheit;
celsius=(temperature - 32) * 5/9;
console.log("temperature in celsius is",celsius);
fahrenheit = (celsius * 9/5) + 32;
console.log("temperature in farenheit is",fahrenheit);
