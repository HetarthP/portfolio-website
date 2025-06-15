AOS.init({
  duration: 1000,
  once: true,
});

document.querySelectorAll('.lightbox-trigger img').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    lightboxImg.src = this.src;
    lightbox.classList.add('active');
  });
});

document.querySelector('.lightbox').addEventListener('click', function () {
  this.classList.remove('active');
});

