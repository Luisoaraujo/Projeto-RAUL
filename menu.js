const openModalBtn = document.getElementById("openModalBtn");
const fecharModalBtn = document.getElementById("fecharModalBtn");
const modal = document.getElementById("myModal");
const fasesContainer = document.getElementById("fasesContainer");

// Botão Começar
document.getElementById("botaoComecar").addEventListener("click", function () {
  // Redireciona para fase 2
  window.location.href = "fase1.html";
});

// Lista de fases
const fases = ["Fase 1", "Fase 2", "Fase 3"];

// Criar os links das fases
function criarLinksFase() {
  fases.forEach((fase, index) => {
    const linkFase = document.createElement("a");
    linkFase.classList.add("link-fase"); // Classe para alterar o css
    linkFase.textContent = fase;
    linkFase.href = `fase${index + 1}.html`;
    fasesContainer.appendChild(linkFase);
  });
}

modal.style.display = "none"; // Tira a janela das fases quando a página é reiniciada

// Abre a janelinha
openModalBtn.addEventListener("click", () => {
  fasesContainer.innerHTML = "";
  criarLinksFase();
  modal.style.display = "block";
});

// Fecha a janela quando o botão de fechar é clicado
fecharModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechaa janela se o usuário clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("botaoSobre").addEventListener("click", function () {
  // Redireciona para "sobre.html"
  window.location.href = "sobre.html";
});
