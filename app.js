const submitBtn = document.querySelector(".submit-btn");
const stars = document.querySelectorAll(".rating-nums li a");
const mainSection = document.querySelector(".main");
const thankYouSection = document.querySelector(".thank-you-section");
const rateNum = document.querySelector(".rate-num");

submitBtn.addEventListener("mouseover", () => {
  if (rateNum === 0) {
    btn.style.cursor = "not-allowed";
  } else {
    btn.style.cursor = "pointer";
  }
});

stars.forEach(function (star, indx) {
  star.addEventListener("click", function () {
    submitBtn.addEventListener("click", function () {
      mainSection.classList.add("hidden");
      thankYouSection.classList.remove("hidden");
      rateNum.innerText = `${indx + 1}`;
    });
  });
});
