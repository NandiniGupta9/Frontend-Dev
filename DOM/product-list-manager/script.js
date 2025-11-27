const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

addBtn.onclick = () => {
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="title">${input.value}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  list.appendChild(li);
  input.value = "";
};

list.addEventListener("click", (e) => {
  const li = e.target.closest("li");

  if (e.target.classList.contains("delete")) li.remove();

  if (e.target.classList.contains("edit")) {
    const span = li.querySelector(".title");
    const val = span.innerText;
    span.outerHTML = `<input class="editBox" value="${val}">`;
    e.target.innerText = "Save";
  }

  if (e.target.innerText === "Save") {
    const inp = li.querySelector(".editBox");
    inp.outerHTML = `<span class="title">${inp.value}</span>`;
    e.target.innerText = "Edit";
  }
});

// Auto save if clicking outside
document.addEventListener("click", (e) => {
  document.querySelectorAll(".editBox").forEach(input => {
    if (!input.contains(e.target)) {
      const li = input.closest("li");
      input.outerHTML = `<span class="title">${input.value}</span>`;
      li.querySelector(".edit").innerText = "Edit";
    }
  });
});
