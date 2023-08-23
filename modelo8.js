const paymentForm = document.getElementById('payment-form');
const creditCardDetails = document.getElementById('credit-card-details');
const confirmationMessage = document.getElementById('confirmation-message');
const confirmButton = document.getElementById('confirm-button');

confirmButton.addEventListener('click', function() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cep = document.getElementById('delivery-cep').value;

    if (cardNumber && expiryDate && cvv && cep) {
        creditCardDetails.style.display = 'none';
        confirmationMessage.style.display = 'block';
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
});
const backToHomeButton = document.getElementById('back-to-home');

backToHomeButton.addEventListener('click', function() {
    window.location.href = "index.html"
});