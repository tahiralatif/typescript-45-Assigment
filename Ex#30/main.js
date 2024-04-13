// creating array
var userName = ["Kinza", "Unza", "Admin", "Maiza", "sulaifa"];
// Using forEach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
