const btn = document.getElementById("dropBtn");
const opt = document.getElementById("options");

btn.onclick = () => opt.classList.toggle("hidden");

opt.onclick = (e) => {
  btn.innerText = e.target.innerText;
  opt.classList.add("hidden");
};

// Close using capturing
document.addEventListener("click", () => opt.classList.add("hidden"), true);
