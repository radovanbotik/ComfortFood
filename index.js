import { sliderComponent } from "./sliderComponent.js";
import { revealLinks } from "./navComponent.js";

const init = () => {
  sliderComponent();
  revealLinks();
};

window.addEventListener("DOMContentLoaded", init);
