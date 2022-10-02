const hideModal = document.querySelector("#hide-modal");
const openModal = document.querySelector("#open-modal");

const handleModal = () => {
  openModal.addEventListener("click", () => {
    document.body.classList.add("show-modal");
  });
  hideModal.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
    console.log("hi");
  });
};

export { handleModal };
