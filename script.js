/* script.js — compartilhado entre todos os manuais */

/* ─── SIDEBAR TOGGLE ──────────────────────────────── */
function toggleSection(id) {
  const sec = document.getElementById("sec-" + id);
  if (sec) sec.classList.toggle("open");
}

/* ─── PAGE SWITCHING ──────────────────────────────── */
function showPage(pageId, clickedItem) {
  // oculta todas as páginas
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  // mostra a página alvo
  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");
    // re-trigger animation
    target.style.animation = "none";
    target.offsetHeight;
    target.style.animation = "";
  }

  // atualiza item ativo na sidebar
  document
    .querySelectorAll(".sidebar-item")
    .forEach((i) => i.classList.remove("active"));
  if (clickedItem) clickedItem.classList.add("active");

  // atualiza breadcrumb
  const crumb = document.getElementById("topbar-crumb");
  if (crumb && clickedItem)
    crumb.textContent = clickedItem.dataset.label || pageId;
}

/* ─── COPY CODE ───────────────────────────────────── */
function copyCode(btn, id) {
  const pre = document.getElementById(id);
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = "copiado ✓";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "copiar";
      btn.classList.remove("copied");
    }, 1800);
  });
}
