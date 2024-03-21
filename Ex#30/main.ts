
// creating array
let userName: string[] = ["Kinza","Unza","Admin","Maiza","sulaifa"];

// Using forEach loop on array
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again.`);
    }
})