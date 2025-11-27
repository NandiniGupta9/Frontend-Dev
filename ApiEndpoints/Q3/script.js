const box = $("#tasks");

function load(filter="") {
  let url = "http://localhost:3003/tasks";
  if (filter === "completed") url += "?completed=true";
  else if (filter) url += `?priority=${filter}`;

  $.get(url, data => {
    box.html(
      data.map(t =>
        `<div>
          <input type="checkbox" data-id="${t.id}" ${t.completed?"checked":""}>
          ${t.title} — ${t.priority}
        </div>`
      ).join("")
    );
  });
}

$("#filter").on("change", e => load(e.target.value));

$(document).on("click","input[type=checkbox]", function(){
  const id = this.dataset.id;
  $.ajax({
    url:`http://localhost:3003/tasks/${id}`,
    method:"PATCH",
    data:{ completed:this.checked }
  });
});

load();
