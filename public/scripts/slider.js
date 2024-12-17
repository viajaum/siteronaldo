// Código para controle do slider
let slideIndex = 0; // Índice da imagem ativa
const slides = document.querySelectorAll('.slide');

// Função para mostrar a próxima imagem
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); // Esconde todas as imagens
  }
  
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0; // Volta para a primeira imagem
  }

  slides[slideIndex].classList.add('active'); // Mostra a imagem ativa
}

// Inicializa o slider
setInterval(showSlides, 3000); // Troca a imagem a cada 3 segundos

// Exibe a primeira imagem imediatamente
showSlides();
