const localLinks = document.querySelector("#local-links");
const toggleMenu = document.querySelector("#toggle-menu");

const navbarReveal = () => {
  toggleMenu.addEventListener("click", () => {
    localLinks.classList.toggle("active");
  });
};

export { navbarReveal };
