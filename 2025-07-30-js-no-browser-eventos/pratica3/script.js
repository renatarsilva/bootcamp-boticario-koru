const caixa = document.getElementById("cor");

caixa.addEventListener("mouseover", () => {
  caixa.style.backgroundColor = "pink";
});

caixa.addEventListener("mouseout", () => {
  caixa.style.backgroundColor = "purple";
});
