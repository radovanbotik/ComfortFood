import { sliderComponent } from "./sliderComponent.js";
import { toggleNav } from "./toggleNav.js";
import { sliderCards } from "./sliderCards.js";
import { anchorNav } from "./anchorNav.js";

const init = () => {
  sliderComponent();
  toggleNav();
  anchorNav();
  sliderCards();
};

window.addEventListener("DOMContentLoaded", init);
