// creating a guestlist array:
let guestlist = ["rabia","dua","muneeza","zinab"];

// making variabl for dontcoming guest:
let dontcome = guestlist[0];

// print the messege of guest who cant come:
console.log(dontcome,"sorry I can't come");

// add or remove values from guestlist array:
guestlist.splice(0, 1, "tahira");

// print the messege for we found bigger dinner table:
console.log("Good news! we have found a biggertable for dinner");

//  adding a new guest at starting index of array:
guestlist.unshift("hadeeqa");

// adding a new guest at ending index of array:
guestlist.push("aqsa");

// get a middle index of our guestlist array:
let middleindex: number = Math.floor(guestlist.length/2);

// adding new guest at middle index of array:
guestlist.splice(middleindex, 0, "unza");

// print messege of updated list:
console.log("updated list of our guest");

// sending invitation messege to our guest one by one with their names:
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner at my home`));


