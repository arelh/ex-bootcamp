// Write a JavaScript function that receives the following library
// object as an input and displays the books that can be read (the
// reading status is true).
// Log the book name, author name, and reading status.




const library = [
{
author: "Bill Gates",
title: "The Road Ahead",
readingStatus: true
},
{
author: "Steve Jobs",
title: "Walter Isaacson",
readingStatus: true
},
{
author: "Suzanne Collins",
title: "Mockingjay: The Final Book of The Hunger Games",
readingStatus: false
}
];


const canRead=library.filter(b=>b.readingStatus==true)
console.log(canRead);



// const nums=[34,35,36,37,38,39]
// const odd=nums.filter(n=> n%2==1)
// console.log(odd);
// console.log(nums);