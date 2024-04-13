// Define function to show magician names
function show_magicians(magicians: string[]) {
    magicians.forEach((name) => console.log(name));
  }
  // function to make magecians great through the .map() it will be modifying array
  function make_great(magicians: string[]) {
    return magicians.map((name) => `The great magician ${name}`);
  }
  
  // Define an array of magecian names
  let magicianNames: string[] = ["Harry porter", "Tahira", "hoorain"];
  
//   making a copy of original array through slice() function:
let copy_magician_names = magicianNames.slice()
// modofy the copyied array to include "The Great" with theri names:
let copy_great_magicians = make_great(copy_magician_names);

// show both original and copied arrays:
// Original
console.log("Original Array:\n");
show_magicians(magicianNames);

// copied
console.log("\nCopied array:\n");
show_magicians(copy_great_magicians);