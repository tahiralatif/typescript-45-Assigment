"use strict";
// making a function:
function make_shirt(size = "large", printmessege = "I love typescript") {
    console.log(`creating a ${size} shirt with ${printmessege} prints on shirt`);
}
// calling a function with by default values:
make_shirt();
// callin a function with now make medium size shirt:
// again calling function:
make_shirt("medium");
// now again cslling fuction with small size and also print differnt type messege:
make_shirt("small", "I Love Javascript");
