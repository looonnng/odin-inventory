const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector(".close");
const confirmButton = document.querySelector(".confirm");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
