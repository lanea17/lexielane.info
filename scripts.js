document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth scroll on anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
  