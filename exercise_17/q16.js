// creating a guestlist array:
// making variabl for dontcoming guest
var guestlist = ["rabia", "dua", "muneeza", "zinab"];
var dontcome = guestlist[0];
// print the messege of guest who cant come:
console.log(dontcome, "sorry I can't come");
// add or remove values from guestlist array:
guestlist.splice(0, 1, "tahira");
// print the messege for we found bigger dinner table:
console.log("Good news! we have found a biggertable for dinner");
//  adding a new guest at starting index of array:
guestlist.unshift("hadeeqa");
// adding a new guest at ending index of array:
guestlist.push("aqsa");
// get a middle index of our guestlist array:
var middleindex = Math.floor(guestlist.length / 2);
// adding new guest at middle index of array:
guestlist.splice(middleindex, 0, "unza");
// print messege of updated list:
console.log("updated list of our guest");
// sending invitation messege to our guest one by one with their names:
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner at my home")); });
// Inform that only two guest invited for the dinner:
console.log("unfortunately,the new dinner table wont arrive on time, so I can invite only two guest to dinner at my home");
// Using while loop to removing the guest from array untill only two names remain:
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry, ".concat(removeguest, " you cant invite them to dinner"));
}
// sending invitation to the last two guest:
console.log("Invitation to the last two guest");
guestlist.forEach(function (lasttwo) { return console.log("luckely ".concat(lasttwo, ",you are still invited to dinner")); });
// removing last two guest from the guestlist:
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
