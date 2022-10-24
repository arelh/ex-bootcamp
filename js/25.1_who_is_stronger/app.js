// let add= function (c) {
//     console.log(this.a+ this.b +  c);
// }
// let obj={
//     a:5,b:7
// };

// //!add.call(obj,3)
let numArray = [1, 2, 3];

//! 2 option check who smaller
// 1. console.log(Math.min(1,2,3));
// 2. console.log(Math.min.//!apply(null, numArray));

// let button=function(content){
//     this.numArray=content;

// }
// button.prototype.click=function () {
//     console.log(`{this.content} clicked`);
// }
// let newButton=new button("add")
// let boundButton=newButton.click.//!bind(newButton)

// boundButton()

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
