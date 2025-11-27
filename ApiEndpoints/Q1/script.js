const box = $("#searchBox");
const loader = $("#loader");
const results = $("#results");

box.on("input", () => {
  const q = box.val().trim();
  loader.show();

  $.ajax({
    url: `http://localhost:3001/products?q=${q}`,
    method: "GET",
    success: data => {
      loader.hide();

      if (!data.length) {
        results.html("<p>No products found</p>");
        return;
      }

      results.html(
        data.map(d =>
          `<div>
            <img src="${d.img}" width="80">
            <h3>${d.name}</h3>
            <p>₹${d.price}</p>
          </div>`
        ).join("")
      );
    }
  });
});
