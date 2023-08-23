const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.classList.add('highlight');
    });

    product.addEventListener('mouseout', () => {
        product.classList.remove('highlight');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.muted = false; // Desliga o mudo
        video.loop = true;   // Ativa o loop
        video.play();        // Inicia a reprodução
    });
});


