function describe_city(city: string , country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling the function:
describe_city("karachi");

describe_city("lahore");

describe_city("berlin","germany");