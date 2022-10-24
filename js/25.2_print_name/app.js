//!--------------------------------- option a ---------------------------------------------------------------

// const makeName = {
//   name: "arel",
//   printName() {
//     console.log(this.name);
//   },
//   PrintNameAfter() {
//     setTimeout(this.printName.bind(this), 3000);
//   },
// };

// makeName.printName();
// makeName.PrintNameAfter();

//!--------------------------------- option b ---------------------------------------------------------------
const makeName = {
  name: "arel",
  printName() {
    console.log(this.name);
  },
  PrintNameAfter() {
    setTimeout(
      function () {
        this.printName();
      }.bind(this),
      5000
    );
  },
};

makeName.printName();
makeName.PrintNameAfter();
