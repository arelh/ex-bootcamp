//!Question 1:
//In your own words what will this point to and why?
(//Note this is the global scope)
console.log(this);

//!answer: this word pioneered to window because he d'ont associated to any object so is go to main object




//!----------------------------------------------------------------------------------------------------------





//!Question 2:
//a. In your own words what will this point to and why?
//b. How can you fix this code?
const myObj = {
name: "Timmy",
greet()  { 
console.log(`Hello ${this.name}`);
},
};
myObj.greet();

//!answer: a) only "hello"  b) we need change the arrow function to direct function



//!----------------------------------------------------------------------------------------------------------





//!Question 3:
//In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
}
myFuncDec()

//!answer: undefine, because we d'ont invoke the function 

//!----------------------------------------------------------------------------------------------------------




//!Question 4:
//In your own words what will this point to and why?
const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();

//!answer: window, because the function linked to global scope 

//!----------------------------------------------------------------------------------------------------------




//!Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
document.querySelector(".element").addEventListener(() => {
console.log(this);
});

//!answer: error, because the addEventListener element without any action