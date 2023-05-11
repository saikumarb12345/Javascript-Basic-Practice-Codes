// *** Open console to see the output [ctrl+shift+j] ***

//1.JavaScript program to find the largest of three given integers.
function largest(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number3) {
    return number2;
  } else {
    return number3;
  }
}
console.log(largest(1, 0, 5));

//2.JavaScript program to reverse a given string.
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("javaScript"));

//3.JavaScript program to replace every character
// in a given string with the character following it in the alphabet.
function replaceAlphabet(str) {
  var s = str.split("");
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case " ":
        break;
      case "z":
        s[i] = "a";
        break;
      case "Z":
        s[i] = "A";
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
    }
    // upper case
    switch (s[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        s[i] = s[i].toUpperCase();
    }
  }
  return s.join("");
}
console.log(replaceAlphabet("python"));

//4.JavaScript program to capitalize the first letter of each word of a given string.
function capitalize(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
}
console.log(capitalize("hi hello"));

//5.JavaScript program to convert a given number to hours and minutes.
function numberToTime(number) {
  let hours = Math.floor(number / 60);
  let min = number % 60;
  return `${hours} hrs ${min} min`;
}
console.log(numberToTime(125));

//6.JavaScript program to convert the letters
// of a given string in alphabetical order.
function alphabetSort(str) {
  return str.split("").sort().join("");
}
console.log(alphabetSort("World"));
console.log(alphabetSort("JavaScript"));

//7.JavaScript program to count the number of vowels in a given string.
function countVowels(str) {
  return str.replace(/[^aeiou]/g, "").length;
}
console.log(countVowels("javascript"));

//8.JavaScript program to check whether
// a given string contains equal number of p's and t's.
function equal_pt(str) {
  let str_p = str.replace(/[^p]/g, "");
  let str_t = str.replace(/[^t]/g, "");
  let pLen = str_p.length;
  let tLen = str_t.length;

  return pLen === tLen;
}
console.log(equal_pt("pattas"));

//9.JavaScript program to create a new
// string of specified copies (positive number) of a given string.
function copies(str, number) {
  if (number < 0) {
    return false;
  } else {
    return str.repeat(number);
  }
}
console.log(copies("hi", 3));

//10.JavaScript program to create a new string
// of 4 copies of the last 3 characters of a
// given original string. The length of the given
// string must be 3 and above.
function copiesLast3(str, number) {
  if (str.length < 3) {
    return false;
  } else {
    return str.substring(str.length - 3).repeat(number);
  }
}
console.log(copiesLast3("hello", 4));

//11.JavaScript program to extract the
//first half of a string of even length.
function first_half(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
}
console.log(first_half("JavaScript"));

//12.JavaScript program to create a new string
// without the first and last character of a given string.
function withoutFirst_Last(str) {
  return str.slice(1, -1);
}
console.log(withoutFirst_Last("JavaScript"));
console.log(withoutFirst_Last("JS"));
console.log(withoutFirst_Last("Python"));

//13.JavaScript program to move last three character
// to the start of a given string. The string length
//must be greater or equal to three
function move_Last3_To_First(str) {
  if (str.length >= 3) {
    return str.slice(-3) + str.slice(0, -3);
  } else {
    return false;
  }
}
console.log(move_Last3_To_First("JavaScript"));

//14.JavaScript program to create a string using the
//middle three characters of a given string of odd length.
// The string length must be greater or equal to three.
function get_Middle_3(str) {
  if (str.length >= 3) {
    if (str.length % 2 != 0) {
      return str.substring(str.length / 2 - 1, str.length / 2 + 2);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(get_Middle_3("Javas"));

//15.JavaScript program to concatenate two strings and
// return the result. If the length of the strings are
// not same then remove the characters from the longer string.
function concatenate_same(str1, str2) {
  if (str1.length != str2.length) {
    if (str1.length > str2.length) {
      return str1.substring(0, str2.length) + str2;
    } else {
      return str1 + str2.substring(0, str1.length);
    }
  } else {
    return str1 + str2;
  }
}
console.log(concatenate_same("Python", "Java"));

//16.JavaScript program to display the city name
// if the string begins with "Los" or "New" otherwise return blank.
function city_Name(str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  }
  return " ";
}
console.log(city_Name("Los Angels"));
console.log("JavaScript");

//17.JavaScript program to compute the sum of
//three elements of a given array of integers of length 3.
function sum(nums) {
  return nums[0] + nums[1] + nums[2];
}
console.log(sum([3, 2, 5]));

//18.JavaScript program to create a new array
// taking the middle elements of the two arrays
// of integer and each length 3.
function mid_Arr(arr1, arr2) {
  let new_Arr = [];
  new_Arr.push(arr1[1], arr2[1]);
  return new_Arr;
}
console.log(mid_Arr([1, 2, 3], [3, 4, 5]));

//19.JavaScript to add two positive integers without carry.
function add_two_int_without_carrying(n1, n2) {
  let result = 0,
    x = 1;
  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10; // x=x*10;
  }
  return result;
}
console.log(add_two_int_without_carrying(200, 900));
console.log(add_two_int_without_carrying(222, 911));

//20.JavaScript code to divide a given array of positive
// integers into two parts. First element goes to first part,
// second element goes to second part, and third element
// goes to first part and so on. Now compute the sum of
// two parts and store into an array of size two.
function alternate_Sum(arr) {
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      result[1] += arr[i];
    } else {
      result[0] += arr[i];
    }
  }
  return result;
}
console.log(alternate_Sum([1, 3, 6, 2, 5, 10]));

//21.JavaScript program to find the types of a given angle.
function types_Of_Angle(degree) {
  if (degree < 90) {
    return "Acuteangle";
  } else if (degree == 90) {
    return "Right Angle";
  } else if (degree > 90 && degree < 180) {
    return "Obtuse Angle";
  }
  return "Straight Angle";
}
console.log(types_Of_Angle(94));

//22. JavaScript program to find the maximum difference
// between any two adjacent elements of a given array of integers.
function max_Difference(arr) {
  var temp;
  var max = -1;
  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
}
console.log(max_Difference([2, 3, 1, 4, 6, 13, 10]));

//23.JavaScript program to find the number which
// appears most in a given array of integers.
function most_Frequent(arr) {
  let max_Count = 0;
  let max_Frequency_Element = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > max_Count) {
      max_Count = count;
      max_Frequency_Element = arr[i];
    }
  }
  return max_Frequency_Element;
}
console.log(most_Frequent([1, 3, 2, 4, 2]));

//24.JavaScript program to replace all the numbers
// with a specified number of a given array of integers.
function replace(arr, old_value, new_value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
console.log(replace([1, 3, 2, 4, 5, 2, 6, 2], 2, 5));

//25.JavaScript program to find the number of times
// to replace a given number with the sum of its digits
// until it convert to a single digit number.
function digit_one(num) {
  var digit_Sum = function (num) {
    var digitsum = 0;
    while (num) {
      digitsum += num % 10;
      num = Math.floor(num / 10);
    }
    return digitsum;
  };
  var result = 0;
  while (num >= 10) {
    result++;
    num = digit_Sum(num);
  }
  return result;
}
console.log(digit_one(156));

//26.JavaScript program to divide an integer by another
//integer as long as the result is an integer and return the result.
function divide_digit(num, d) {
  if (d == 1) {
    return num;
  } else {
    while (num % d === 0) {
      num = num / d;
    }
  }
  return num;
}
console.log(divide_digit(12, 2));

//27.JavaScript program to create the dot products of two given 3D vectors.
function dot_Product(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    //3D vector
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dot_Product([1, 2, 3], [1, 2, 3]));

//28.JavaScript program to find the number of even values
//in sequence before the first occurrence of a given number.
function find_Even_Before(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] != num) {
      count++;
    }
    if (arr[i] == num) {
      return count;
    }
  }
  return count;
}
console.log(find_Even_Before([1, 2, 3, 4, 5, 6, 7, 8], 6));

//29.JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + ....
//where n is a positive integer and all divisions are integer.
function calculate_Sum(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + num;
    num = Math.floor(num / 2);
  }
  return sum;
}
console.log(calculate_Sum(8));

//30.JavaScript program to check whether a given string
// represents a correct sentence or not. A string is considered
// correct sentence if it starts with the capital letter and ends with a full stop (.).
function is_CorrectSentence(str) {
  let first_char = str[0];
  let last_char = str[str.length - 1];
  return /[A-Z]/.test(first_char) && last_char == ".";
}
console.log(is_CorrectSentence("Hello hi."));
console.log(is_CorrectSentence("hello hi"));

//31.JavaScript program to find the longest string from a given array
function longest_String(arr) {
  let max = 0;
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      res = arr[i];
    }
  }
  return res;
}
console.log(longest_String(["hi", "hello", "byebye"]));

//32.JavaScript program to find the smallest prime number
// strictly greater than a given number.
function next_Primenum(num) {
  for (var i = num + 1; ; i++) {
    var isPrime = true;
    for (var d = 2; d * d <= i; d++) {
      if (i % d == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
}
console.log(next_Primenum(3));

//33.JavaScript program to find the number of even digits in a given integer.
function number_of_EvenDigits(num) {
  let count = 0;
  while (num > 0) {
    let rem = num % 10;
    if (rem % 2 == 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(number_of_EvenDigits(32150));

//34.JavaScript program to remove all characters from
// a given string that appear more than once
function remove_Repeated(str) {
  str = str.split("");
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      res.push(str[i]);
    }
  }
  return res.join("");
}
console.log(remove_Repeated("abca"));

//35. JavaScript program to check whether all the
// digits in a given number are the same or not.
function is_SameDigits(num) {
  let first_Digit = num % 10;
  while (num > 0) {
    if (num % 10 !== first_Digit) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}
console.log(is_SameDigits(2122));
