// ***Open console to see the output [ctrl+shift+j]

//  Guessing a Number
const randomNum = Math.floor(Math.random() * 10);
const guess = prompt("Enter number between 1-10");
console.log("Your guess is " + guess);
console.log("Random number is " + randomNum);
if (guess == randomNum) {
  console.log("Nice guess");
} else {
  console.log("Wrong guess");
}
