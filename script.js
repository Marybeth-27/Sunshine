// Mobile Navigation
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// Automatic Current Year
document.querySelectorAll("#year").forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card, .title, .about, .contact").forEach(element => {
  element.classList.add("fade");
  observer.observe(element);
});

// Recycling Guide
document.querySelectorAll(".bin").forEach(bin => {
  bin.addEventListener("click", () => {
    bin.classList.toggle("open");
  });
});

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("response");

    if (!name || !email || !message) {
      response.textContent = "Please complete all required fields.";
      return;
    }

    const mailSubject = encodeURIComponent("EcoLife: " + subject);
    const mailBody = encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\n\nMessage:\n" + message
    );

    response.textContent = "Opening your email application...";

    window.location.href =
      "mailto:marybethsocorrom@gmail.com?subject=" +
      mailSubject + "&body=" + mailBody;
  });
}