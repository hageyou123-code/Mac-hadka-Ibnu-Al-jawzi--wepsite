/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    menuToggle.textContent =
      navMenu.classList.contains("open") ? "✕" : "☰";
  });

}


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }

  });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});


/* ================= NAVBAR SHADOW ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    navbar.style.boxShadow =
      "0 5px 25px rgba(0,0,0,.07)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


/* ================= REGISTRATION FORM ================= */

const registerForm =
  document.getElementById("registerForm");

const formMessage =
  document.getElementById("formMessage");

if (registerForm) {

  registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const course =
      document.getElementById("course").value;

    const message =
      document.getElementById("message").value.trim();


    if (!name || !phone || !course) {

      formMessage.textContent =
        "Fadlan buuxi meelaha muhiimka ah.";

      formMessage.style.color = "#b3261e";

      return;
    }


    /*
      WhatsApp registration

      Number:
      +252 90 751 9523
    */

    const whatsappNumber =
      "252907519523";


    const whatsappMessage =
      `Assalaamu Calaykum Mac-hadka Ibnu Al-Jawzi.%0A%0A` +
      `Waxaan doonayaa inaan isdiiwaangeliyo.%0A%0A` +
      `Magac: ${encodeURIComponent(name)}%0A` +
      `Telefoon: ${encodeURIComponent(phone)}%0A` +
      `Maaddada: ${encodeURIComponent(course)}%0A` +
      `Fariin: ${encodeURIComponent(message || "Ma jiro fariin gaar ah.")}`;


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    formMessage.textContent =
      "Codsigaaga waa diyaar. WhatsApp ayaa la furayaa...";

    formMessage.style.color =
      "#0b7a53";


    setTimeout(() => {

      window.open(
        whatsappURL,
        "_blank"
      );

    }, 800);

  });

}


/* ================= BACK TO TOP ================= */

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ================= CURRENT YEAR ================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

  }
