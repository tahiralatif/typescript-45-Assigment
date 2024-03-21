var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its original orders:
var countriesToVisit = ["paris", "korea", "turkey", "brazil"];
console.log("original orders", countriesToVisit);
// Print the array in Alphabatical orders without modifying actual list:
console.log("Alphabatical order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in original order:
console.log("still in original orders:", countriesToVisit);
// Print the array in reverse ordre without modifying actual list:
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in original order:
console.log("still in original orders:", countriesToVisit);
// we have change the original array order now:
console.log("original order reversed:", countriesToVisit.reverse());
// Print the array to show it's original order:
console.log("back to original order", countriesToVisit.reverse());
// Print the array to how that the its order has been changed in alphabatical order now:
console.log("sorted in alphabatical order:", countriesToVisit.sort());
// we have change again original array order rever order now:
console.log("Alphabatical order reversed:", countriesToVisit.reverse());
