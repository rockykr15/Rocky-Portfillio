const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

// Toggle between light and dark mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Validate the contact form and show a demo response
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        response.textContent = "Please fill in all fields.";
        return;
    }

    response.textContent = "Thank you, " + name + "! Your message has been received.";
    contactForm.reset();
});
