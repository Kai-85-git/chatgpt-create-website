document.addEventListener('DOMContentLoaded', function() {
  // Slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function startSlider() {
    slides[currentSlide].classList.add('active');
    setTimeout(changeSlide, 5000); // 5秒ごとにスライドを切り替え
  }

  function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // 次のスライドに移動
    slides[currentSlide].classList.add('active');
    setTimeout(changeSlide, 5000);
  }

  startSlider();

  // Image scroll animation
  const image = document.querySelector('.right-column img');
  let isVisible = false;

  function onScroll() {
    if (!isVisible) {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (imageTop <= windowHeight) {
        image.style.opacity = '1';
        image.style.transform = 'translateY(0)';
        isVisible = true;
      }
    }
  }

  window.addEventListener('scroll', onScroll);
});