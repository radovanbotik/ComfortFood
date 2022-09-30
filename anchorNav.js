const header = document.querySelector("#site-header");

const anchorNav = () => {
  const options = { threshold: 0 };
  const callback = entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("scrolled");
        console.log("not");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(header);
};

export { anchorNav };
