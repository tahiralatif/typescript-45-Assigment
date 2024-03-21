
// making variables:
let age: number = 17;
// creating program for determining the stage of life using (else if) chain:
// step 1 baby stage
if(age < 2){
      console.log("if you are less than two years old so now you are a baby stage");
}
// step 2 todler stage
else if(age >= 2 && age < 4){
    console.log(" If the person is at least 2 years old but less than 4, that the person is a toddler stage.");
}
// step 3 kid stage
else if(age >= 4 && age < 13){
    console.log("If the person is greater than or equal to 4 , but less than 13 that the person is kid stage.");
}
// step 4 teenager
else if(age >= 13 && age < 20){
    console.log("if the person is greater then or equal to 13 , but less than 20 so that the person is teenager");
}
// step 5 adult stage
else if(age >= 20 && age < 65){
    console.log("if the person is greater than or equal to 20 , but less than 65 that the person is adult stage");
}
// step 6 elder stage
else if(age >= 65){
    console.log("if the person is 65 tears old so that person is an elder stage");
}