    // ===== Hamburger  =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when clicking hamburger
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing immediately
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('active') && // menu is open
        !navLinks.contains(e.target) &&          // click is NOT inside menu
        !hamburger.contains(e.target)            // click is NOT on hamburger
    ) {
        navLinks.classList.remove('active');
    }
});


// Smooth scroll
document.addEventListener("click", function (e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  }
});



