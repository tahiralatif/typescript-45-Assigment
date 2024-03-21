var guestlist = ["rabia", "dua", "muneeza", "zainab"];
var dontcome = guestlist[0];
console.log(dontcome, "sorry I can't come.");
guestlist.splice(0, 1, "tahira");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner at my home?")); });
