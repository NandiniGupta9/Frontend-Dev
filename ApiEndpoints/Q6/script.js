const email = document.getElementById("email");
const pass = document.getElementById("pass");
const msg = document.getElementById("msg");

document.getElementById("reg").onclick = async () => {
  const e = email.value;

  const check = await axios.get(`http://localhost:3006/users?email=${e}`);
  if (check.data.length) {
    msg.innerText = "Email already registered.";
    return;
  }

  await axios.post("http://localhost:3006/users", {
    email: e,
    pass: pass.value
  });

  msg.innerText = "User Registered!";
};
