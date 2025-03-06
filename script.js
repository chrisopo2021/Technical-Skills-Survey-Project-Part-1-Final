// Begins with the hamburger menu functionality

function toggleMenu() {
  const menuButton = document.querySelector(".list-dropdown");
  menuButton.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const menuButton = document.querySelector(".menu");
  const dropdown = document.querySelector(".list-dropdown");

// If the user clicks outside the menu button and the dropdown, close the dropdown

  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }

// Close the dropdown when a link is clicked

  document.querySelectorAll(".list-dropdown a").forEach((link) => {
    link.addEventListener("click", function () {
      const dropdown = document.querySelector(".list-dropdown");
      dropdown.classList.remove("active");
    });
  });
  });

// Back to Top button functionality
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}