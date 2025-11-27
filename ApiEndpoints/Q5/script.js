const box = document.getElementById("data");

document.getElementById("day").onchange = load;

function load() {
  const d = this.value;
  fetch(`http://localhost:3005/timetable?day=${d}`)
    .then(r => r.json())
    .then(data => {
      if (!data.length) {
        box.innerHTML = "No classes today.";
        return;
      }
      box.innerHTML = data.map(c =>
        `<p>${c.subject} — ${c.faculty} — ${c.time}</p>`
      ).join("");
    });
}

load.call({value:"Monday"});
