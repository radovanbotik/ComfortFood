const header = document.querySelector("#site-header");
const offerSection = document.querySelector("#offer1");

const anchorNav = () => {
  window.addEventListener("scroll", () => {
    // console.log({
    //   window: window.pageYOffset,
    //   header: header.getBoundingClientRect().height,
    // });

    if (window.pageYOffset >= header.getBoundingClientRect().height) {
      header.classList.add("scrolled");
    }
    if (window.pageYOffset <= header.getBoundingClientRect().height) {
      header.classList.remove("scrolled");
    }
  });
};

export { anchorNav };
