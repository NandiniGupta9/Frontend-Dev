const url = "http://localhost:3002/employees";
const list = document.getElementById("list");
const err = document.getElementById("error");

// GET Employees
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  render(data);
};
xhr.send();

// UI rendering
function render(data) {
  list.innerHTML = "";
  data.forEach(e => {
    const row = document.createElement("div");
    row.innerHTML = `
      <span>${e.name}</span>
      <button>${e.status}</button>
    `;
    const btn = row.querySelector("button");

    btn.onclick = () => updateStatus(e, btn);
    list.appendChild(row);
  });
}

// PATCH
function updateStatus(emp, btn) {
  const newStatus = emp.status === "active" ? "inactive" : "active";
  btn.innerText = newStatus;

  const req = new XMLHttpRequest();
  req.open("PATCH", `${url}/${emp.id}`);
  req.setRequestHeader("Content-Type","application/json");
  req.onload = () => {
    if (req.status != 200) {
      btn.innerText = emp.status;
      err.innerText = "Update failed!";
    }
  };
  req.send(JSON.stringify({ status: newStatus }));
}
