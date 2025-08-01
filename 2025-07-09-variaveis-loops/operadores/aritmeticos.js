let soma = function (a, b, c) {
  let soma = a + b + c;
  console.log(soma);
};

soma(10, 20, 30);

let subtracao = function (a, b, c) {
  return a - b - c;
};

console.log(subtracao(50, 100, 200));

let exponential = function (a, b) {
  return a ** b;
};
console.log(exponential(7, 2));

let remainder = function (a, b) {
  return a % b;
};
console.log(remainder(10, 2));

// +, -, *, **, //

// como fazer raiz quadrada
let raiz = function (a) {
  return a ** 0.5;
};

console.log(raiz(9));
