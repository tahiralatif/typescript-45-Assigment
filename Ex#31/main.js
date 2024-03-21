var userName = ["Kinza", "Unza", "Maiza", "Admin", "Sulaifa"];
userName = [];
if (userName.length === 0) {
    console.log("Our Array is empty we need to find some users!");
}
else {
    // using forEach loop
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thanks for logging again"));
        }
    });
}
