import { sliderComponent } from "./sliderComponent.js";
import { revealLinks } from "./navComponent.js";
import { sliderCards } from "./sliderCards.js";

const init = () => {
  sliderComponent();
  revealLinks();
  sliderCards();
};

window.addEventListener("DOMContentLoaded", init);
