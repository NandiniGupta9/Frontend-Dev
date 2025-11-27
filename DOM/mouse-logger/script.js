const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.onmousemove = (e) => {
  coords.innerText = `X:${e.clientX} Y:${e.clientY}`;
};

box.ondblclick = (e) => {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = e.offsetX + "px";
  dot.style.top = e.offsetY + "px";
  box.appendChild(dot);
};
