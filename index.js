import { sliderMenu } from "./sliderMenu.js";
import { navbarReveal } from "./navbarReveal.js";
import { sliderReviews } from "./sliderReviews.js";
import { navbarAnchor } from "./navbarAnchor.js";

const init = () => {
  navbarReveal();
  navbarAnchor();
  sliderMenu();
  sliderReviews();
};

window.addEventListener("DOMContentLoaded", init);
