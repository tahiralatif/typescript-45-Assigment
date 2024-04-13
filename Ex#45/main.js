// define a function to create a car object with optional options:
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initializa a car object with manufacturer and model:
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add aditional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object:
var my_car = creat_car("toyota", "carrola", "color: black", "Sunroof: true");
// print the variable to ensure all the information is stored crrectly in the car object
console.log(my_car);
