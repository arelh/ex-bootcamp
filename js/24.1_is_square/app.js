function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquare = function () {
  if (this.a === this.b && this.b === this.c && this.b === this.d) {
    console.log(true);
  } else {
    console.log(false);
  }
};
const res = new Square(3, 3, 2, 3);
res.isSquare();

// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };

//   myObject.greet(); // Greetings from Madrid

//   function Person(name) {
//     this.name = name;
// }
// var c = new Person('John');
// console.log(c.name);
