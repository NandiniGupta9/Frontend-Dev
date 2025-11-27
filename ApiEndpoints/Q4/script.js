async function load() {
  const dash = document.getElementById("dashboard");
  dash.innerHTML = "Loading ⏳";

  try {
    const [u, o, p] = await Promise.all([
      fetch("http://localhost:3004/users"),
      fetch("http://localhost:3004/orders"),
      fetch("http://localhost:3004/products")
    ]);

    if (!u.ok || !o.ok || !p.ok) throw "API Failed";

    const users = await u.json();
    const orders = await o.json();
    const products = await p.json();

    dash.innerHTML = `
      <h3>Total Users: ${users.length}</h3>
      <h3>Total Orders: ${orders.length}</h3>
      <h3>Total Products: ${products.length}</h3>
    `;
  } catch {
    dash.innerHTML = `<h3>⚠ Some data could not be loaded.</h3>`;
  }
}

load();
