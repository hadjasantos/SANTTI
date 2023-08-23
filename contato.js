document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const feedbackMessage = document.getElementById("feedback-message");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name === "" || email === "" || message === "") {
            feedbackMessage.textContent = "Por favor, complete todos os campos.";
            feedbackMessage.style.color = "red";
        } else {
            feedbackMessage.textContent = "Agradecemos! Entraremos em contato em breve.";
            feedbackMessage.style.color = "green";
            contactForm.reset();
        }

        const messageContainer = document.getElementById("message-container");
        messageContainer.classList.remove("hidden");
    });
});