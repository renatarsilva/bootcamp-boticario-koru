let nota = function (a, b, c, d) {
  let resultado = (a + b + c + d) / 4;
  if (resultado > 7) {
    return true;
  } else {
    return false;
  }
};

console.log(nota(7, 9, 5, 10));
