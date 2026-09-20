document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("#year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const form = document.getElementById("joinForm");
  const msg = document.getElementById("form-message");
  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.style.display = "block";
      msg.textContent = "You're on the early list ✦ The live Google Form connection will be added next.";
      form.reset();
    });
  }
});

function demoVerify() {
  const input = document.getElementById("cert");
  const result = document.getElementById("verify-result");
  if (!input || !result) return;
  const value = input.value.trim();
  if (!value) {
    result.innerHTML = '<div class="verify-neutral">Enter a certificate ID to begin.</div>';
    return;
  }
  result.innerHTML = '<div class="verify-neutral">Verification database will be connected before the first BuildX certificates are issued. This page is already prepared for it.</div>';
}
