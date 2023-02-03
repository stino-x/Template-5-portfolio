const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const Previous = document.querySelector('#slide-left');
const Next = document.querySelector('#slide-right');
const Navimage = document.querySelector('.carousel-nav');
const NavimageArr = Array.from(Navimage.children);
const slidesSize = slides[0].getBoundingClientRect();
const slidesWidth = slidesSize.width;
// when i click left , moves slides to the left

// when i click right , moves slides to the right

//  when i click the nav indicators move to that slide

const setSlidePosition = (slide, index) => {
  slide.style.left = `${slidesWidth * index}px`;
};

slides.forEach(setSlidePosition);
Next.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  // moving to the next slide
  const amountToMove = nextSlide.style.left;
  track.style.transform = `translateX(- ${amountToMove}  )`;
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
});