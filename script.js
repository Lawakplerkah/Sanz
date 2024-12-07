// Toggle Menu for Mobile
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });

      // Close menu on mobile after clicking a link
      document.querySelector("nav ul").classList.remove("active");
    }
  });
});

// Search Functionality
document.getElementById("searchInput")?.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.style.display = section.innerText.toLowerCase().includes(searchText)
      ? "block"
      : "none";
  });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.classList.add("dark-mode-toggle");
darkModeToggle.innerText = "Dark Mode";
document.querySelector("header").appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on current mode
  darkModeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});