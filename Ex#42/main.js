"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define function to show magician names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The great magician ${name}`);
}
// Define an array of magecian names
let magicianNames = ["Harry porter", "Tahira", "hoorain"];
let great_magicians = make_great(magicianNames);
// console.log(great_magicians);
show_magicians(great_magicians);
