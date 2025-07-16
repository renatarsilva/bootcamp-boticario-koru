// const myArray = Array.from(
//   { length: Math.floor(Math.random() * 500) },
//   (_, i) => i
// );

const myArray = [-1, 4, 5, 7, 4, 2, 700, 8, 3, 2, 199, 230];

console.log("Total de elementos: ", myArray.length);
console.log("Primeiro elemento: ", myArray[0]);
console.log("Último elemento: ", myArray.at(-1));
console.log("Penultimo elemento: ", myArray.at(-2));
// Extra Maior e Menor Elemento
const maior = Math.max(...myArray);
const menor = Math.min(...myArray);

console.log("Maior elemento: ", maior);
console.log("Menor elemento: ", menor);
