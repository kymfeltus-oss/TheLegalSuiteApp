// Simple page fade-in on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity .6s ease";
  requestAnimationFrame(() => (document.body.style.opacity = 1));
});

// Optional fade-out on internal .html links (same-origin)
document.querySelectorAll('a[href$=".html"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    // let target open in new tab if set
    if (a.target === "_blank") return;
    e.preventDefault();
    const href = a.getAttribute("href");
    document.body.style.opacity = 0;
    setTimeout(()=> window.location.href = href, 300);
  });
});
