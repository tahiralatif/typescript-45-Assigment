"use strict";
// variables:
let carrot = "carrot";
let Uppercasecarrot = "CARROT";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with string:
// equality...
console.log("Equality");
console.log("Is carrot is equal to carrot?");
console.log(carrot == "carrot");
// Inequality....
console.log("\nInequality");
console.log("is carrot is smaller than carrot?");
console.log(carrot < "carrot");
// Tests for using to lowercase function:
console.log("\nUsing lowercase function");
console.log("is carrot is equal to carrot after converting to lowercase?");
console.log(Uppercasecarrot.toLowerCase() == "carrot");
console.log("\nis carrot is smaller than carrot after converting to lowercase?");
console.log(Uppercasecarrot.toLowerCase() < "carrot");
// Numerical tests...
console.log("\nnumerical tests");
// equals to == :
console.log("is ten is equal to twenty?");
console.log(ten == twenty);
//  Not equals to != :
console.log("\nis ten not equal to twenty?");
console.log(ten != twenty);
// greater than > :
console.log("\n ten is greater than twenty?");
console.log(ten > twenty);
// less than < :
console.log("\nIs ten is less than twenty?");
console.log(ten < twenty);
// greater than or equal to:
console.log("\nten is greater than or equals to 5?");
console.log(ten >= 5);
// less than or equal to:
console.log("\nis twenty is less than or equals to 10?");
console.log(twenty <= 10);
// tests using "and" & "or" operators:
// using && (and)
console.log("\ntwenty is not equals to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to ten and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\nten is greater than 20 or ten is equals to ten");
console.log(ten > 20 || ten == 10);
console.log("\nten is greater than 20 or 10 is not equals to 10");
console.log(ten > 20 || ten != 10);
// test whether an item is include array:
console.log("\nis orange include my fruits array?");
console.log(fruits.includes("orange"));
console.log("\nIs banana is not include my fruits array?");
console.log(!fruits.includes("orange"));
