const area = document.getElementById("area");
const counter = document.getElementById("counter");
const reset = document.getElementById("resetBtn");

area.addEventListener("input", () => {
  const remaining = 100 - area.value.length;

  counter.textContent = `${remaining} characters left`;

  if (remaining <= 20 && remaining > 0) counter.style.color = "orange";
  else if (remaining <= 0) counter.style.color = "red";
  else counter.style.color = "black";
});

area.addEventListener("keydown", (e) => {
  if (area.value.length >= 100 && e.key !== "Backspace") e.preventDefault();
});

reset.onclick = () => {
  area.value = "";
  counter.textContent = "100 characters left";
  counter.style.color = "black";
};
