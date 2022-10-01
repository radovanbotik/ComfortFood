const slider = document.querySelector("#slider-burgers");
const sliderInner = document.querySelector("#slider-burgers__inner");
const slides = document.querySelectorAll(".slider__inner__slide");
const sliderCenterLeft = slider.getBoundingClientRect().width / 2 - 20;
const sliderCenterRight = slider.getBoundingClientRect().width / 2 + 20;

const sliderComponent = () => {
  let grabbed = false;

  sliderInner.addEventListener("mousedown", e => {
    grabbed = true;
    slider.style.cursor = "grabbing";
  });

  sliderInner.addEventListener("mouseup", e => {
    grabbed = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseleave", e => {
    grabbed = false;
    slider.style.cursor = "grab";
  });

  sliderInner.addEventListener("mousemove", e => {
    if (grabbed) {
      //mousemove.scrollLeft = amount of pixels the inner element has moved
      //mousemove.movementX = difference between previous and current mouse pos
      slider.scrollLeft = slider.scrollLeft - e.movementX;
    }
  });

  sliderInner.addEventListener("wheel", e => {
    e.preventDefault();
    //scroll is dictated by mouse scroll
    slider.scrollLeft = slider.scrollLeft + e.deltaY / 2;
  });
};

export { sliderComponent };
