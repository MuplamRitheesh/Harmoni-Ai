// Simple form handling (just demo, no backend yet)
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
   const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar ul");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful (demo)!");
      window.location.href = "index.html";
    });
  }
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration successful (demo)!");
      window.location.href = "login.html";
    });
  }
});
