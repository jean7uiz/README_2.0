// ---------- Modo claro / escuro ----------
const html = document.documentElement;
const botaoTema = document.getElementById("tema");

function aplicarTema(tema) {
  html.setAttribute("data-bs-theme", tema);
  botaoTema.textContent = tema === "dark" ? "Tema claro" : "Tema escuro";
}

let temaSalvo = "light";
try {
  temaSalvo = localStorage.getItem("tema") || "light";
} catch (e) {}
aplicarTema(temaSalvo);

botaoTema.addEventListener("click", () => {
  const novo = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try {
    localStorage.setItem("tema", novo);
  } catch (e) {}
});

// ---------- Barras de habilidades animadas ao rolar ----------
const barras = document.querySelectorAll(".progress-bar");
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.style.width = entrada.target.dataset.valor + "%";
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.4 });

barras.forEach((barra) => observador.observe(barra));
