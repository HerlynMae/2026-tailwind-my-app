// Select all tab buttons and content sections
const tabButtons = document.querySelectorAll(".events__tab ");
const tabContents = document.querySelectorAll(".events__item");

// Loop through each tab button and add a click event listener
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active state from all tabs and contents
    clearActiveTabs();
    clearActiveContents();

    // Add active class to the clicked tab
    button.classList.add("active");

    // Get corresponding content by matching the button's ID + '-detail'
    const correspondingContent = document.querySelector(`#${button.id}-detail`);
    if (correspondingContent) {
      correspondingContent.classList.add("active");
    }
  });
});

// Remove 'active' class from all tab buttons
function clearActiveTabs() {
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

// Remove 'active' class from all tab contents
function clearActiveContents() {
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });
}
