// Get the button element that will toggle the theme
const btn = document.getElementById("themeToggle");

// If the saved theme in localStorage is 'dark', show the sun icon initially
if (localStorage.theme === "dark") {
  btn.textContent = "☀️"; // Sun icon indicates you can switch to light mode
}

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Toggle the 'dark' class on the <html> element
  document.documentElement.classList.toggle("dark");

  // If <html> now has the 'dark' class
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark"; // Save dark mode preference
    btn.textContent = "☀️"; // Show sun icon for switching back to light
  } else {
    localStorage.theme = "light"; // Save light mode preference
    btn.textContent = "🌙"; // Show moon icon for switching to dark
  }
});
