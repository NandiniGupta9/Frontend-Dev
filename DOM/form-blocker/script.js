const form = document.getElementById("myForm");
const msg = document.getElementById("msg");

form.onsubmit = (e) => {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");

  if (!name.value.trim()) {
    eName.innerText = "Name required"; valid = false;
  }
  if (!email.value.includes("@")) {
    eEmail.innerText = "Invalid email"; valid = false;
  }
  if (pass.value.length < 6) {
    ePass.innerText = "Min 6 characters"; valid = false;
  }

  if (valid) msg.innerText = "Form Submitted Successfully";
};

form.oninput = () => {
  eName.innerText = "";
  eEmail.innerText = "";
  ePass.innerText = "";
};
