function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("100.0 ºF =", convertToCelsius(100).toFixed(1), "ºC");

const convertToCelsius1 = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
console.log("50.0 ºF =", convertToCelsius1(50).toFixed(1), "ºC");
