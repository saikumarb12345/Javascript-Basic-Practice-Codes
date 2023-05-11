//1.JavaScript function to check whether an `input` is a date object or not
var is_date = function (input) {
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return true;
  }
  return false;
};
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));

//2.JavaScript function to get the current date.
let currDate = function (sp) {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + sp + mm + sp + yy;
};
console.log(currDate("/"));
console.log(currDate("-"));

//3.JavaScript function to get the number of days in a month
let no_of_days = function (mm, yy) {
  return new Date(yy, mm, 0).getDate();
};
console.log(no_of_days(1, 2023));
console.log(no_of_days(2, 2024));

//4.JavaScript function to get the month name from a particular date.
let month_name = function (inp) {
  mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return mlist[inp.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));

//5.JavaScript function to compare dates (i.e. greater than, less than or equal to)
let compareDates = function (date1, date2) {
  if (date1 < date2) console.log("date1 < date2");
  else if (date1 > date2) console.log("date1 > date2");
  else console.log("date1 = date2");
};
compareDates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"));

//6.JavaScript function to add specified minutes to a Date object
let addMinutes = function (dt, min) {
  return new Date(dt.getTime() + min * 60 * 1000);
};
console.log(addMinutes(new Date(2014, 10, 2), 30).toString());

//7.JavaScript function to test whether a date is a weekend.
let is_weekend = function (date1) {
  let dt = new Date(date1);
  let d = dt.getDay();
  if (d == "5" || d == "6") {
    return "weekend";
  }
  return "not a weekend";
};
console.log(is_weekend("Nov 15, 2014"));

//8.JavaScript function to get difference between two dates in days.
let date_diff_indays = function (date1, date2) {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  let diff = dt1.getTime() - dt2.getTime();
  return new Date(diff);
};
console.log(date_diff_indays("04/02/2014", "11/04/2014"));

//9.JavaScript function to get the last day of a month.
let lastday = function (yy, mm) {
  return new Date(yy, mm+1, 0).getDate();
};
console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
