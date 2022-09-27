

// Create a function that takes one argument, an array.
// Use this array:
//const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well


const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];
const counter={}
let str = array.toString().toLowerCase().replaceAll(',','').replaceAll(' ','');
function countTheLetters(str){
    for(let i=0;i<str.length;i++){
        if(counter[str[i]]){
        counter[str[i]]++
        countTheLetters
        }
        else{
            counter[str[i]]=1
        }

    }
    return counter;
}
console.log(countTheLetters(str));
