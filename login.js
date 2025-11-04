const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

signupBtn.onclick = function() {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Register";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

signinBtn.onclick = function() {
  if (title.innerHTML === "Register") {
    // Revine la login
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
  } else {
    // Dacă e pe login, redirecționează spre pagina principală
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    if (email && password) {
      window.location.href = "index.html"; // redirecționează
    } else {
      alert("Te rog completează emailul și parola!");
    }
  }
};
