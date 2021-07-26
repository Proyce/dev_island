
// create hotels objects
let hotel1 = {
    name: "Hotel Casablanca",
    price: 150,
    distance: 12.5
};

let hotel2 = {
    name: "Binex Hotels",
    price: 45,
    distance: 3.5
};

let hotel3 = {
    name: "Skyrift Hotels",
    price: 220,
    distance: 2
};

let hotel4 = {
    name: "Hotel Vienna",
    price: 35,
    distance: 100
};

let hotel5 = {
    name: "Hotel De Viz",
    price: 68,
    distance: 48
};

let hotel6 = {
    name: "Durban Hotels",
    price: 67.5,
    distance: 92
};
let hotel7 = {
    name: "Hotel Emeritus",
    price: 10,
    distance: 2
};

let hotel8 = {
    name: "Duplix Hotels",
    price: 40.5,
    distance: 7.5
};

let hotel9 = {
    name: "Brix Hotels",
    price: 10,
    distance: 22
};

let hotel10 = {
    name: "Hotel Mobxx",
    price: 91.9,
    distance: 0.2
};

let hotel11 = {
    name: "Hotel De La Mot",
    price: 22,
    distance: 6
};

let hotel12 = {
    name: "Muet Hotels",
    price: 61.5,
    distance: 3
};

// Create hotel arrays
let hotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12];

// create results variable
let result = "List of available hotels:";

for (let x = 0; x < hotels.length; x++) {
    result += ` 
    Name of hotel: 
    ${hotels[x].name}, 
    price per night: $${hotels[x].price}, 
    distance from city center: ${hotels[x].distance}miles.
    `
}

// enter budget
let budget = prompt(`Please enter your budget`);
budget = parseFloat(budget);

let distance = prompt(`Please enter your distance in miles`);
distance = parseFloat(distance);

// reset result
result = "";

let hotelCount = 0;

for (let x = 0; x < hotels.length; x++) {
    if(hotels[x].price <= budget && hotels[x].distance <= distance){
        result += ` 
        Name of hotel: 
        ${hotels[x].name}, 
        price per night: $${hotels[x].price}, 
        distance from city center: ${hotels[x].distance}miles.
        `
        hotelCount++;
    }
}

if (hotelCount > 1) {
    result = 
    `
    Your search returned ${hotelCount} results;

    ${result}
    `
} else if(hotelCount === 1) {
    result = 
    `
    Your search returned 1 result.

    ${result}
    `
} else {
   result = 
    `
   Sorry, your search did not return any results.
    `
}

console.log(result);

// C1 complete.