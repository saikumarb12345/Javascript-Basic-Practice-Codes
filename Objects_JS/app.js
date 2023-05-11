// Creation of Object
//1.Using Object Literal
// const person = {
//   fname: sai,
//   lname: b,
//   age: 19,
// };
// //2.Using JavaScript keyword New
// const person1 = new Object();
// person1.fname = "sai";
// person1.lname = "b";
// person1.age = 19;

// 1. JavaScript program to delete the rollno property from the
//following object. Also print the object before or after deleting the property.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
let delete_property = function (obj) {
  console.log(obj.rollno);
  return delete obj["rollno"];
};
console.log(delete_property({ name1: "David Rayy", sclass: "VI", rollno: 12 }));

//2. JavaScript program to display the reading status (i.e. display
// book name, author name and reading status) of the following books.
var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
  let book = library[i].title + " " + library[i].author;
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else {
    console.log("You still need to read " + book);
  }
}
