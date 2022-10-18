const space = document.querySelector(`input[type="text"]`);

const spaceOF = (value) => {
  if (value < 100) {
    return "need more characters";
  }
};
const button = document.querySelector(`[type='submit']`);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const val = Number(space.value);
  const val2 = spaceOF(val);
  console.log(val2);
  const show = document.querySelector("h3");
  show.innerHTML = val2;
});
