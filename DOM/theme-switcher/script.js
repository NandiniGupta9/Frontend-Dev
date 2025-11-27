document.body.setAttribute("data-theme", "light");

document.addEventListener("click", e => {
  if (e.target.dataset.theme){
    document.body.setAttribute("data-theme", e.target.dataset.theme);
  }
});
