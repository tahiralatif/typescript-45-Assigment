

let guestlist: string[] = ["rabia","dua","muneeza","zainab"];

let dontcome: string = guestlist[0];

console.log(dontcome,"sorry I can't come.");

guestlist.splice(0, 1, "tahira");

guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner at my home?`));
