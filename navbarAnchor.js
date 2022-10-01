const header = document.querySelector("#site-header");
const offerSection = document.querySelector("#offer1");

const throttle = (callback, delay) => {
  //last scroll happened
  let last = 0;
  //e might be argument or w/e
  return (...args) => {
    //current scroll happened
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return callback(...args);
  };
};

const navbarAnchor = () => {
  window.addEventListener(
    "scroll",
    throttle(e => {
      if (window.pageYOffset >= header.getBoundingClientRect().height) {
        header.classList.add("scrolled");
      }
      if (window.pageYOffset <= header.getBoundingClientRect().height) {
        header.classList.remove("scrolled");
      }
    }, 500)
  );
};

export { navbarAnchor };
