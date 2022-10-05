const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// = foods.sort((a, b) =>  a.foods-b.foods);
// console.log(order);


// a.1. Sort the array of strings from descending to ascending
// order.
const order = foods.sort((a, b) => a.localeCompare(b));
console.log(order);
// a.2. Sort the array of strings from ascending to descending
// order.
const order2 = foods.sort((a, b) => b.localeCompare(a));
console.log(order2);
// b. Let's sort an array of words that includes a word with an
// uppercase:
