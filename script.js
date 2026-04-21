document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const navItems = document.querySelectorAll(".nav-links a");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });

    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navLinks.classList.remove("show");
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "#dc2626";
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formMessage.textContent = "Introduce un correo electrónico válido.";
        formMessage.style.color = "#dc2626";
        return;
      }

      formMessage.textContent = "Formulario validado correctamente. Ya puedes conectarlo a Formspree, Netlify Forms o tu backend.";
      formMessage.style.color = "#16a34a";

      contactForm.reset();
    });
  }
});
