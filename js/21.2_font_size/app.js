const btnPlus = document.querySelector('.button1');
const btnMinus = document.querySelector('.button2');
const text=document.querySelector("h1")
var textSize=20;



btnPlus.addEventListener("click", ()=> {
    text.style.fontSize=textSize+20+"px"
    if(textSize>100){
        text.style.fontSize=100+"px"
    }
})

btnMinus.addEventListener("click", ()=> {
    
    text.style.fontSize=textSize
    textSize=textSize-20
    text.style.fontSize=textSize+"px"
    if(textSize<5){
        text.style.fontSize=6+"px"
    }
})






// function increaseFontSizeBy5px() {
//   txt = document.getElementById("+");
//   style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
//   currentSize = parseFloat(style);
//   txt.style.fontSize = currentSize + 5 + "px";
// }
// function increaseFontSizeBy1px() {
//   txt = document.getElementById("-");
//   style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
//   currentSize = parseFloat(style);
//   txt.style.fontSize = currentSize - 5 + "px";
// }
