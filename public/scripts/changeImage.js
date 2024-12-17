// changeImage.js
document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      const mainPhoto = document.getElementById('main-photo');
      const newImageSrc = thumbnail.getAttribute('data-image');
      mainPhoto.src = newImageSrc; // Troca a imagem principal
    });
  });
  