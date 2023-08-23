document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email-input");
    const subscribeButton = document.getElementById("subscribe-button");
    const statusMessage = document.getElementById("status-message");

    subscribeButton.addEventListener("click", function() {
        const email = emailInput.value;
        if (isValidEmail(email)) {
            statusMessage.textContent = "Obrigada por se inscrever!";
            statusMessage.style.color = "green";
        } else {
            statusMessage.textContent = "Por favor, insira um email válido.";
            statusMessage.style.color = "red";
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
