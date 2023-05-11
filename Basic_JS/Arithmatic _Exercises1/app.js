// *** Open console to see the output [ctrl+shift+j] ***

//1.JavaScript program to get the website URL (loading page)
console.log(document.URL);

// 2.JavaScript exercise to get the extension of a filename.
let filename = "hello.php";
console.log(filename.split(".").pop());

// 3.JavaScript program to get the difference between
//a given number and 15, if the number is greater than 15
//return double the absolute difference.
function diff(number) {
  let result = Math.abs(number - 13);
  if (number > 13) {
    console.log("result double is " + result * 2);
  }
}
diff(32);

//4.JavaScript program to check two given numbers
// and return true if one of the number is 50 or
//if their sum is 50.
function equal(number1, number2) {
  return number1 == 50 || number2 == 50 || number1 + number2 == 50;
}
console.log(equal(25, 25));

//5. JavaScript program to check from two given
// integers, whether one is positive and another one is negative.
function positiveAndnegative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positiveAndnegative(2, -2));

//6.JavaScript program to create a new string
// adding "Py" in front of a given string.
// If the given string begins with "Py" then
// return the original string.
function createString(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}
console.log(createString("charm"));
console.log(createString("Python"));

//7. JavaScript program to remove a character
// at the specified position of a given string
// and return the new string.
function removeChar(str, place) {
  part1 = str.substring(0, place);
  part2 = str.substring(place + 1, str.length);
  return part1 + part2;
}
console.log(removeChar("javascript", 3));
console.log(removeChar("javascript", 5));

//8.JavaScript program to create a new string from
// a given string changing the position of first
// and last characters. The string length must be
// greater than or equal to 1.
function changePosition(str) {
  if (str.length <= 1) {
    return str;
  }
  first_Char = str.charAt(0);
  last_Char = str.charAt(str.length - 1);
  middle_Str = str.substring(1, str.length - 1);
  return last_Char + middle_Str + first_Char;
}
console.log(changePosition("javascript"));

//9.JavaScript program to check whether a given
//positive number is a multiple of 3 or a multiple of 7.
function multipleof3or7(number) {
  return number % 3 == 0 || number % 7 == 0;
}
console.log(multipleof3or7(20));

//10.JavaScript program to check whether a
// string starts with 'Java' and false
function startsWithJava(str) {
  return str.startsWith("Java");
}
console.log("JavaScript   " + startsWithJava("JavaScript"));
console.log("Python  " + startsWithJava("Python"));
