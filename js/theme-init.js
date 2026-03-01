(function () {
  // IIFE: runs immediately to check the theme without polluting global scope

  if (
    // Check if dark mode should be applied
    localStorage.theme === "dark" ||
    // Condition 1: user has manually set theme to 'dark'

    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
    // Condition 2: user hasn't chosen a theme yet AND system prefers dark mode
  ) {
    document.documentElement.classList.add("dark");
    // Add 'dark' class to <html> to activate dark mode styles
  }
})();
