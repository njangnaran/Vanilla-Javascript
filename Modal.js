const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector("#exitbtn");
const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);
