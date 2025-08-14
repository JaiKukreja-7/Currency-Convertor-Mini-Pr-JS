// Toggle Login/Signup Forms
document.getElementById("login-btn").onclick = () => {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-btn").classList.add("active");
  document.getElementById("signup-btn").classList.remove("active");
};

document.getElementById("signup-btn").onclick = () => {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-btn").classList.add("active");
  document.getElementById("login-btn").classList.remove("active");
};

// Toggle Password Visibility
["login", "signup", "confirm"].forEach(id => {
  const toggle = document.getElementById(`toggle-${id}-password`);
  if (toggle) {
    toggle.onclick = () => {
      const input = document.getElementById(`${id}-password`);
      input.type = input.type === "password" ? "text" : "password";
    };
  }
});

// Password Strength
const passwordInput = document.getElementById("signup-password");
const passwordStrengthDisplay = document.getElementById("password-strength");

if (passwordInput) {
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    passwordStrengthDisplay.textContent = `Password Strength: ${strength}`;
  });
}

function checkPasswordStrength(password) {
  const strong = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (strong.test(password)) return "Strong";
  else if (password.length >= 6) return "Medium";
  return "Weak";
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Handle Login
document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (!isValidEmail(email)) {
    alert("Enter a valid email.");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  // Simulated login success
  alert("Login successful!");
  window.location.href = "converter.html"; // Redirect to currency converter page
});

// Handle Signup
document.getElementById("signup-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (!isValidEmail(email)) {
    alert("Enter a valid email.");
    return;
  }
  if (checkPasswordStrength(password) !== "Strong") {
    alert("Password must be strong.");
    return;
  }
  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  alert("Signup successful! You can now log in.");
  document.getElementById("login-btn").click();
});
