import { sliderMenu } from "./sliderMenu.js";
import { navbarReveal } from "./navbarReveal.js";
import { sliderReviews } from "./sliderReviews.js";
import { navbarAnchor } from "./navbarAnchor.js";
import { handleModal } from "./handleModal.js";
import { validateForm } from "./validateForm.js";

const init = () => {
  navbarReveal();
  navbarAnchor();
  sliderMenu();
  sliderReviews();
  handleModal();
  validateForm();
};

window.addEventListener("DOMContentLoaded", init);
