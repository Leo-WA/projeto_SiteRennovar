$(document).ready(function(){
    $('input[placeholder="Número de Whatsapp"]').mask('(00) 00000-0000');
});

document.addEventListener('DOMContentLoaded', function () {
    let sliderInputs = document.querySelectorAll('.container input[type="radio"]');
    let currentIndex = 0; 
    
    function goToNextSlide() {
       
        sliderInputs[currentIndex].checked = false;
        
        currentIndex = (currentIndex + 1) % sliderInputs.length;
        
        sliderInputs[currentIndex].checked = true;
    }

    setInterval(goToNextSlide, 5000);
});
