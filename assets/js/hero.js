// Hero Section - Navbar scroll effect & smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero-section");

  if (!heroSection || !navbar) return;

  // Handle navbar transparency on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Set initial state

  // Smooth scroll for scroll indicator
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    scrollDown.addEventListener("click", function (e) {
      e.preventDefault();
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Video fallback on error
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.addEventListener("error", function () {
      console.warn("Hero video failed to load, showing poster image");
    });
  }
});
