import { sliderMenu } from "./sliderMenu.js";
import { navbarReveal } from "./navbarReveal.js";
import { sliderReviews } from "./sliderReviews.js";
import { navbarAnchor } from "./navbarAnchor.js";
import { handleModal } from "./handleModal.js";

const init = () => {
  navbarReveal();
  navbarAnchor();
  sliderMenu();
  sliderReviews();
  handleModal();
};

window.addEventListener("DOMContentLoaded", init);
