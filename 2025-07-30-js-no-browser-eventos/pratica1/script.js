const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

// quando o botao for clicado, a mensagem será exibida:

botao.addEventListener("click", function () {
  mensagem.textContent =
    "Você clicou no botão! O texto foi alterado com sucesso";
});
