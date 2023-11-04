$(document).ready(function(){
    $('input[placeholder="Número de Whatsapp"]').mask('(00) 00000-0000');
});


// JavaScript: Este script irá alternar automaticamente os slides a cada 5 segundos.

document.addEventListener('DOMContentLoaded', function () {
    let sliderInputs = document.querySelectorAll('.container input[type="radio"]');
    let currentIndex = 0; // Começa do primeiro slide

    // Função para ir para o próximo slide
    function goToNextSlide() {
        // Desmarca o atual botão de rádio
        sliderInputs[currentIndex].checked = false;

        // Incrementa o índice para o próximo slide, ou volta para 0 se for o último
        currentIndex = (currentIndex + 1) % sliderInputs.length;

        // Marca o próximo botão de rádio
        sliderInputs[currentIndex].checked = true;
    }

    // Configura o intervalo para mudar os slides a cada 5 segundos
    setInterval(goToNextSlide, 5000);
});
