const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#themeToggle");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelector("#year").textContent = new Date().getFullYear();
