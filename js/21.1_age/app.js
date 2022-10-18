//!   Create a webpage that has an input field for the user’s age and
//!   a button. If the user enters a number above 18, make the text
//!   “you can drink appear”. If the user enters a number below 18,
//!   make the text “you’re too young” appear

const age = document.querySelector(`input[type="text"]`);

const ageOF = (value) => {
  if (value >= 18) {
    return "you can drink";
  }
  return "you're too young";
};
const button = document.querySelector(`[type='submit']`);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const val = Number(age.value);
  const val2 = ageOF(val);
  console.log(val2);
  const show = document.querySelector("h2");
  show.innerHTML = val2;
});
