// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

let arr=[4,5,6,7,8,9,10,11,12,13]

function doubleValues(arr) {
   let res=arr.map(function (i){
        return i*2;
   }
   )
   return res;
}

console.log(doubleValues(arr));
//-------------------------------------------------------------------------------------
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr) {
    let res=[];
    arr.forEach(function (i){
        if (i%2==0){
            res.push(i);
        }
    }
    )
    return res;
 }

 console.log(onlyEvenValues(arr));
//---------------------------------------------------------------------------------------
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.


function showFirstAndLast(arr) {
    let arr2=[]
    arr.forEach(function(i,ind){
        if(ind==0||ind==arr.length-1)
           arr2.push(i)
         })
        return arr2;
    }

 console.log(showFirstAndLast(arr));
//--------------------------------------------------------------------
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

let stringg = "uuuiiidgfbuoeoeoeueiuaaaioui";

function vowelCount(str) {
  let myarr = str.split("");
  console.log(myarr);
  let res = {};
  myarr.forEach((letter) => {
    if (letter == "u" || letter == "i"||letter=="o"||letter=="e"||letter=="a") {
      if (res[letter]) {
        res[letter] += 1;
      } else {
        res[letter] = 1;
      }
    }
  });

  return res;
}
console.log(vowelCount(stringg));



// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

let stringgg = "abcdefghigk"

function capital(str){
  let news= str.split("")
  news= news.map(function(w){
    return w.toUpperCase()
  })
  return news.join("");
}
console.log(capital(stringgg));


// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

let string ="bzth";

function shiftLetters(str) {
  const alphabet = {
    a: "z",
    b: "a",
    c: "b",
    d: "c",
    e: "d",
    f: "e",
    g: "f",
    h: "g",
    i: "h",
    j: "i",
    k: "j",
    l: "k",
    m: "l",
    n: "m",
    o: "n",
    p: "o",
    q: "p",
    r: "q",
    s: "r",
    t: "s",
    u: "t",
    v: "u",
    w: "v",
    x: "w",
    y: "x",
    z: "y",
  };
  str = str.split("");
  let res = [];
  str.forEach(function (e, i) {
    res.push(alphabet[str[i]]);
  });
  return res.join("");
}
console.log(shiftLetters(string));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

