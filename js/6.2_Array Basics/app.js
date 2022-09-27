const people = ["Greg", "Mary", "Devon", "James"];
//!
people.shift("Greg");
//!
people.pop();
//!
people.unshift("Mat");
//!
people.push("arel");
//!
for (i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}
//!//!
let copy = people.slice(2);
//!!

console.log(people.indexOf("Mary"));
console.log(people.indexOf("foo"));
people.splice(2,1,"elizabeth","artie","james")
console.log(people);
const withBob=people.concat('bob');
console.log(withBob);

