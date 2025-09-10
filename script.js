// Menu mobile toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-lista').classList.toggle('ativo');
});

// Carrossel de banners
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.controle');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

// Função para mudar slide
function goToSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    
    slideContainer.style.transform = `translateX(-${index * 25}%)`;
    controls[currentSlide].classList.remove('ativo');
    currentSlide = index;
    controls[currentSlide].classList.add('ativo');
}

// Adicionar eventos aos controles
controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Eventos para as setas
document.querySelector('.carrossel-seta.esquerda').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

document.querySelector('.carrossel-seta.direita').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

// Auto-play para o carrossel
let intervalId = setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// Pausar auto-play quando o mouse estiver sobre o carrossel
document.querySelector('.carrossel').addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

document.querySelector('.carrossel').addEventListener('mouseleave', () => {
    intervalId = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
});
