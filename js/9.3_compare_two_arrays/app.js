
const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "pizza", "Olives", "Hamburgers"];

function same(arr1,arr2){
    const sameWord=0
        for(let i=0 ; i<arr1.length;i++){
            let word1= arr1[i]
            for(let j =0; j<arr2.length;j++){
                let word2=arr2[j]
                if(word1==word2){
                    console.log(word1,`=` ,word2 );
                }
        
             }
        
        }
}

same(food,food1);

//Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false