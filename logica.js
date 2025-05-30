botaoInicar = document.querySelector(".iniciar")

botaoIniciar.addEventListener("click",iniciarJogo)

function iniciarJogo() {
  telaIncial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"
}