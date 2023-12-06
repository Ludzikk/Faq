const faqItem = document.querySelectorAll(".faq__itemtop");

function activeFaqQuestion() {
  const icon = this.lastElementChild;
  const bottomText = this.parentElement.lastElementChild;

  bottomText.classList.toggle("active-faq");

  if (bottomText.classList.contains("active-faq")) {
    icon.setAttribute("src", "./dist//img/icon-minus.svg");
  } else {
    icon.setAttribute("src", "./dist/img/icon-plus.svg");
  }
}

faqItem.forEach((btn) => {
  btn.addEventListener("click", activeFaqQuestion);
});
