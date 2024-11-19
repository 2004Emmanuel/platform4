const faqs = document.querySelectorAll(".faqia");
faqs.forEach((faqia) => {
  faqia.addEventListener("click", () => {
    faqia.classList.toggle("active");
  });
});
