"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function to print each magician name from an array:
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// An array containing the names of magecians:
let magecianNames = ["Harry Porter", "Tahira", "hoorain"];
// call the function to print each magecian name:
show_magicians(magecianNames);
