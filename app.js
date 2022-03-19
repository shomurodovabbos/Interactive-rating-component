const submitBtn = document.querySelector(".submit-btn");
const stars = document.querySelectorAll(".rating-nums li a");
const mainSection = document.querySelector(".main");
const thankYouSection = document.querySelector(".thank-you-section");
const rateNum = document.querySelector(".rate-num");

stars.forEach(function (star, indx) {
  star.addEventListener("click", function () {
    if (star.clicked === undefined) {
      submitBtn.style.cursor = "pointer";
    }
    submitBtn.addEventListener("click", function () {
      mainSection.classList.add("hidden");
      thankYouSection.classList.remove("hidden");
      rateNum.innerText = `${indx + 1}`;
    });
  });
});
