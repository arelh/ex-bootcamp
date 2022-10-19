const animals = document.querySelector("#animals");
const form = document.querySelector("form");
const button = document.querySelector("#submit");
const lion = document.querySelector(".lion");
const bear = document.querySelector(".bear");
const giraffe = document.querySelector(".giraffe");
const cow = document.querySelector(".cow");

button.addEventListener("click", function (e) {
  console.log("animals:", animals.value);
  for (let i = 0; i < animals.length; i++) {
    if (animals.value === "lion") {
      lion.style.display = "block";
      bear.style.display = "none";
      cow.style.display = "none";
      giraffe.style.display = "none";
    } else if (animals.value === "bear") {
      bear.style.display = "block";
      lion.style.display = "none";
      cow.style.display = "none";
      giraffe.style.display = "none";
    } else if (animals.value === "cow") {
      cow.style.display = "block";
      bear.style.display = "none";
      giraffe.style.display = "none";
      lion.style.display = "none";
    } else if (animals.value === "giraffe") {
      giraffe.style.display = "block";
      bear.style.display = "none";
      lion.style.display = "none";
      cow.style.display = "none";
    } else {
      giraffe.style.display = "none";
      bear.style.display = "none";
      lion.style.display = "none";
      cow.style.display = "none";
    }
  }
  e.preventDefault();
});
