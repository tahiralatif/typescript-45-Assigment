// Define a function to print each magician name from an array:
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// An array containing the names of magecians:
let magecianNames: string[] = ["Harry Porter", "Tahira", "hoorain"];

// call the function to print each magecian name:
show_magicians(magecianNames);