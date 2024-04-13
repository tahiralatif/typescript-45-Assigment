// define a function to create a car object with optional options:


function creat_car(manufacturer, model, ...options){
    // Initializa a car object with manufacturer and model:
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add aditional option to the car object
    options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;

}
// call the function to create a car object:
let my_car = creat_car("toyota" , "carrola" , "color: black" , "Sunroof: true");

// print the variable to ensure all the information is stored crrectly in the car object
console.log(my_car);


