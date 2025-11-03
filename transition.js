document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = 1;
});

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", e => {
    const href = el.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => { window.location.href = href; }, 500);
    }
  });
});
