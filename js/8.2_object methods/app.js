const myCountry = {
  country: "israel",
  capital: "jerusalem",
  language: "hebrew",
  population: "9 milions",
  neighbours: ["jarden", "egypt", "levanon"],
  describe() {
    console.log(`${this.country} has ${this.population} people their mother tongue is ${this.language} they have 3 neighbouring countries ${this.neighbours}
   and a capital called,${this.capital}`);
  },
  checkIsland() {
    this.isIsland = this.neighbours.length ? false : true;
    return this.isIsland;
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

