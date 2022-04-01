const form = document.getElementById("form");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const mensagemValue = mensagem.value;

  if (mensagemValue === "") {
    alert("Erro no envio: Insira uma mensagem");
  } else {
    alert("Obrigada!!!");
  }
}
