const modal = document.getElementById("modal");
const bigImg = document.getElementById("bigImg");

document.querySelector(".gallery").onclick = (e) => {
  bigImg.src = e.target.src;
  modal.classList.remove("hidden");
};

modal.onclick = () => modal.classList.add("hidden");

modal.querySelector(".content").onclick = (e) => e.stopPropagation();
