const localLinks = document.querySelector("#local-links");
const toggleMenu = document.querySelector("#toggle-menu");

const toggleNav = () => {
  toggleMenu.addEventListener("click", () => {
    localLinks.classList.toggle("active");
  });
};

export { toggleNav };
