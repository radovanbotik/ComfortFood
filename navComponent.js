const localLinks = document.querySelector("#local-links");
const toggleMenu = document.querySelector("#toggle-menu");

const revealLinks = () => {
  toggleMenu.addEventListener("click", () => {
    localLinks.classList.toggle("active");
  });
};

export { revealLinks };
