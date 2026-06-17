const formulario = document.querySelector("form");
const email = document.querySelector(".nome");
const senha = document.querySelector(".senha");
const botao = document.querySelector(".enviar");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    email.value.trim() === "" ||
    senha.value.trim() === ""
  ) {
    alert("Preencha todos os campos.");
    return;
  }

  botao.textContent = "Entrando...";
  botao.disabled = true;

  setTimeout(() => {
    alert("Login realizado com sucesso!");

    email.value = "";
    senha.value = "";

    botao.textContent = "Entrar";
    botao.disabled = false;
  }, 1500);
});
