let isLogin = true;

/* ================= SWITCH LOGIN/SIGNUP ================= */
function switchMode() {
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Signup";
  document.getElementById("modeText").innerText = isLogin ? "Signup" : "Login";
}

/* ================= SHOW/HIDE PASSWORD ================= */
function togglePass() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

/* ================= AUTH ================= */
function auth() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Fill all fields";
    return;
  }

  if (isLogin) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      loginSuccess();
    } else {
      msg.innerText = "Invalid credentials";
    }
  } else {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    msg.innerText = "Signup successful! Now login.";
    switchMode();
  }
}

/* ================= LOGIN SUCCESS ================= */
function loginSuccess() {
  document.getElementById("authPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

/* ================= LOGOUT ================= */
function logout() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("authPage").classList.remove("hidden");
}

/* ================= THEME TOGGLE ================= */
function toggleTheme() {
  document.body.classList.toggle("light");
}

/* ================= AUTO LOGIN ================= */
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log("User exists");
  }
}
function sendMessage(event) {
  event.preventDefault(); // stops page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("message").value;
  const msgBox = document.getElementById("contactMsg");

  // validation
  if (!name || !email || !message) {
    msgBox.style.color = "red";
    msgBox.innerText = "Please fill all fields";
    return;
  }

  if (!email.includes("@")) {
    msgBox.style.color = "red";
    msgBox.innerText = "Enter a valid email";
    return;
  }

  // success message
  msgBox.style.color = "lightgreen";
  msgBox.innerText = "Message sent successfully!";

  // reset form
  document.querySelector("form").reset();
};