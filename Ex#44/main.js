"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function with a rest parameter that accept items argument represented our sandwich:
function makeSandwich(...items) {
    console.log("\nmaking a sandwich with the folllowing items\n");
    items.forEach(singleitem => console.log(" -" + singleitem));
    console.log("\n Now enjoy your sandwich");
}
// call the function 3 times with 3 different number of argument:
makeSandwich("Chicken", "Egg", "cheese", "Mayonase");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Chicken", "Butter", "Mayonase", "Lettuce", "Cheese", "Egg", "Tomato");
