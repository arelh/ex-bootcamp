const answer=document.querySelector(".answer")
const massage=document.querySelector(".massage")
const guessKey=document.querySelector(".guessKey")
const guessArr=[]
// const allLetters="abcdefghijklmnopqrstuvwxyz"



const getRandomLetters=(){
return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

document.addEventListener("keyup",(e)=>{
    if(/^[a-z]$/.test(guessLetter))
})