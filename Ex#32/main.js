// Array of current users
var current_user = ["Rabia", "doha", "Dua", "Ayesha", "Hoorain"];
// Arrayof new users
var new_user = ["tahira", "tara", "dua", "shifa", "Rabia"];
// using forEach loop for checking new username availability 
new_user.forEach(function (new_one_user) {
    // condition for username already exist and save in our_condition variables
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print messeges using if else statement
    if (our_condition) {
        console.log("\nSorry ".concat(new_one_user, " is already taking\n\"so you need to use a new user name\""));
    }
    else {
        console.log("\nthis username ".concat(new_one_user, ", is available"));
    }
});
