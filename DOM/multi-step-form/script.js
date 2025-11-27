const steps = document.querySelectorAll(".step");
const showStep = (n) => steps.forEach(s => s.classList.toggle("hidden", s.dataset.step != n));

document.getElementById("next1").onclick = () => {
  if (!document.getElementById("name").value.trim()) return alert("Name required");
  showStep(2);
};

document.getElementById("next2").onclick = () => {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) return alert("Invalid email");
  showStep(3);
};

document.getElementById("finish").onclick = () => {
  const pass = document.getElementById("password").value;
  if (pass.length < 6) return alert("password must >= 6");

  document.getElementById("summary").innerText =
   `✔ Name: ${name.value}\n✔ Email: ${email.value}\n✔ Password: Saved`;
};

document.getElementById("back1").onclick = () => showStep(1);
document.getElementById("back2").onclick = () => showStep(2);
