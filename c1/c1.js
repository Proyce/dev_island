
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

// Create hotel arrays
let hotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];

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
console.log(result);

let budget = prompt(`Please enter your budget`);
budget = parseFloat(budget);

let distance = prompt(`Please enter your distance in miles`);
distance = parseFloat(distance);

// reset result
result = "";

for (let x = 0; x < hotels.length; x++) {
    if(hotels[x].price <= budget && hotels[x].distance <= distance){
        result += ` 
        Name of hotel: 
        ${hotels[x].name}, 
        price per night: $${hotels[x].price}, 
        distance from city center: ${hotels[x].distance}miles.
        `
    }
}