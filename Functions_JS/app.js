// *** Open console to see the output [ctrl+shift+j] ***
// str == 'Any String';

//1.JavaScript function that reverse a number.
function reverseNumber(num) {
  //   let rev_Num = 0;
  //   while (num > 0) {
  //     let rem = num % 10; // rem=Reminder
  //     rev_Num = rev_Num * 10 + rem;
  //     num = Math.floor(num / 10);
  //   }
  //   return rev_Num;
  num = num + ""; // To convert number to String
  return num.split("").reverse().join("");
}
console.log(reverseNumber(341));

//2.JavaScript function that checks whether a passed string is palindrome or not?
function is_Palindrome(str) {
  s = str.split("").reverse().join("");
  return str === s; // Checks for palindrome
}
console.log(is_Palindrome("abcba")); // true
console.log(is_Palindrome("abcd")); // false
console.log(is_Palindrome("a")); // true

//3.JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetical_Order(str) {
  return str.split("").sort().join("");
}
console.log(alphabetical_Order("hello")); // ehllo

//4.JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function uppercase(str) {
  let str1 = str.split(" ");
  let res_Arr = [];
  for (let i = 0; i < str1.length; i++) {
    res_Arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
  }
  return res_Arr.join(" ");
}
console.log(uppercase("java script"));
console.log(uppercase("the quick brown for"));

//5.JavaScript function which accepts an argument and returns the type.
// function typeOfArg(arg) {
//   return arg.typeof();
// }
// console.log(typeOfArg("JavaScript"));

//6.JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(str) {
  let max = "";
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i].length > str[j].length) {
        max = str[i];
      } else {
        max = str[j];
      }
    }
  }
  return max;
}
console.log(longestWord("hi hello hi"));

// Different types of functions
//1.Named Function
function message1() {
  console.log("Hi,Hello");
}
message1();
//2.Anonymous Function
let message2 = function () {
  console.log("Hi.How are you?");
};
message2();
//3.Arrow functions
//Normal arrow function
var message3 = () => {
  console.log("Hello");
};
message3();
var add = (a, b) => a + b;
console.log(add(2, 3));
var sqaure = (a) => {
  return a * a;
};
console.log(sqaure(5));
//4.Higher Order Functions
function higherOrderFunction(func) {
  return func(5, 3);
}
function multiply(a, b) {
  return a * b;
}
let result = higherOrderFunction(multiply);
console.log(result);
