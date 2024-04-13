
// Array of current users
let current_user: string[] = ["Rabia","doha","Dua","Ayesha","Hoorain"];

// Arrayof new users
let new_user: string[] = ["tahira","tara","dua","shifa","Rabia"];

// using forEach loop for checking new username availability 
new_user.forEach(new_one_user =>{

    // condition for username already exist and save in our_condition variables
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    // print messeges using if else statement
    if(our_condition){
        console.log(`\nSorry ${new_one_user} is already taking
"so you need to use a new user name"`);
    }else{
        console.log(`\nthis username ${new_one_user}, is available`)
    }

})