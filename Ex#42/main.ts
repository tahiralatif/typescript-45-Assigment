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

// call the make_great function to modify magecians names:
let great_magicians = make_great(magicianNames);

// call show_magcians that show modifyed list of magicians
show_magicians(great_magicians);
