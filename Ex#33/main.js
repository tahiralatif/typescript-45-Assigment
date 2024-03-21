// creating a variable:
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using forloop method:
for (var _i = 0, ordinal_number_1 = ordinal_number; _i < ordinal_number_1.length; _i++) {
    var oneNumber = ordinal_number_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
