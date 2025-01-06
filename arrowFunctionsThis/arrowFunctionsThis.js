const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(this); // Retorna o contexto completo
});
btn.addEventListener("click", function () {
  console.log(this); // Retorna o próprio elemento
});
