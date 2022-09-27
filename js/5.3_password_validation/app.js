function pas1(password) {
  if ((password + "").length < 7) {
    console.log("Weak");
  } else {
    console.log("strong");
  }
}

function pas2(password) {
  (password + "").length < 7 ? console.log("Weak") : console.log("strong");
}

function pas3(password) {
  (password + "").length >= 7 && console.log("strong");
  (password + "").length < 7 && console.log("weak");
}

function pas4(password) {
  (password + "").length > 7 ? (password.includes(password.toUpperCase()))?console.log("very strong") : console.log("strong") : console.log("weak")
}
pas4("AAAAAA111111");
