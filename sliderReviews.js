const slider = document.querySelector("#slider-reviews");
const slides = [...document.querySelectorAll("[data-id='card-review']")];
const slideWidth = slides[0].getBoundingClientRect().width;
const btnPrev = document.querySelector("#reviews-button-prev");
const btnNext = document.querySelector("#reviews-button-next");

let counter = 0;
const spreadSlides = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * slideWidth}px`;
  });
};

const translateSlides = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${100 * counter}%)`;
  });
};

const sliderReviews = () => {
  spreadSlides();

  btnPrev.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
      counter = slides.length - 1;
    }
    translateSlides();
  });

  btnNext.addEventListener("click", () => {
    counter++;
    if (counter > slides.length - 1) {
      counter = 0;
    }
    translateSlides();
  });
};

export { sliderReviews };
