
// cresting a Array with 5 values
let userName: string[] = ["Kinza", "Unza", "Maiza", "Admin", "Sulaifa"];

// Remove the all values now our array is empty:
userName = []

// using if with length statement for checking array values
if(userName.length === 0){
    console.log("Our Array is empty we need to find some users!")
 }else{
    // using forEach loop
    userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see status report?`);
        }else{
            console.log(`hello ${oneUser}, thanks for logging again`);
        }
    })
 }