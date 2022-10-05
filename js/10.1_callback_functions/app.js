/* 1 Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function. The function checks that
the string is indeed a string. If the string is a string, pass
the string to a callback function that logs that string to the
console.*/

function isString(string, str) {
  if (typeof string == "string") {
    str(string);
  }
}
function str(str1) {
  console.log(str1);
}

/* 2. Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.*/

function firstWordUpperCase(string, func) {
  string = string.charAt(0).toUpperCase() + string.slice(1);
  func(string);
}

function func1(str) {
  console.log(str.replaceAll(" ", "_"));
}
firstWordUpperCase("ba ba ba ba", func1);

/*3. Call the ‘firstWordUpperCase’ function with a callback of
your choice.*/

function replaceOToQ(str3) {
  console.log(str3.replaceAll("o", "q"));
}
firstWordUpperCase("hello_world", replaceOToQ);

/*4. Create your own function that will receive from one of its
arguments a callback function.*/
function bigger(num, func) {
  if (num > 100) {
    func(num);
  } else {
    console.log("smaller");
  }
}
function func(n) {
  console.log(`${n} bigger from 100`);
}
bigger(150, func);
