const search = document.getElementById("search");
const rows = document.querySelectorAll("#rows tr");
const msg = document.getElementById("msg");

search.oninput = () => {
  let found = false;

  rows.forEach(r => {
    if (r.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      r.style.display = "";
      found = true;
    } else r.style.display = "none";
  });

  msg.innerText = found ? "" : "No results found";
};
