
// making a array of countries and print its original orders:
let countriesToVisit: string[] = ["paris","korea","turkey","brazil"];
console.log("original orders",countriesToVisit);

// Print the array in Alphabatical orders without modifying actual list:
console.log("Alphabatical order:",[...countriesToVisit].sort());

// show that the array is still in original order:
console.log ("still in original orders:",countriesToVisit);

// Print the array in reverse ordre without modifying actual list:
console.log("reverse order:",[...countriesToVisit].reverse());

// show that the array is still in original order:
console.log ("still in original orders:",countriesToVisit);

// we have change the original array order now:
console.log("original order reversed:",countriesToVisit. reverse());

// Print the array to show it's original order:
console.log("back to original order", countriesToVisit.reverse());

// Print the array to how that the its order has been changed in alphabatical order now:
console.log("sorted in alphabatical order:", countriesToVisit. sort());

// we have change again original array order rever order now:
console.log("Alphabatical order reversed:",countriesToVisit. reverse());
