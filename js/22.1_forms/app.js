const form = document.querySelector("form");
const button = document.querySelector("button");
const massage=document.querySelector(".massage")
const confirm = document.querySelector(".confirm");
const confirm_val = document.querySelector("#confirm_val");
const userName = document.querySelector("#userName");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const confirm_button=document.querySelector("#confirm_button")
const change_button=document.querySelector("#change_button")

button.addEventListener("click", function (e) {
  console.log("userName:", userName.value);
  console.log("age:", age.value);
  console.log("email:", email.value);
  e.preventDefault();
  confirm_val.innerText = `userName: ${userName.value} 
age:${age.value}
email:${email.value} `;
confirm.style.display="block"

});

confirm_button.addEventListener("click",function(){
    alert("congratulations you successfully sent this form")
})
    change_button.addEventListener("click",function(){
        confirm.style.display="none"
})