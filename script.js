// Sample vehicle data with images
const vehicles = [
    { id: 1, name: "Lorry", image: "lorry.png" },
    { id: 2, name: "Canter", image: "canter.png" },
    { id: 3, name: "boom_truck", image: "boom_truck.png" },
    { id: 4, name: "motor_bike", image: "motor_bike.png" }
    { id: 5, name: "three_wheeler", image: "three_wheeler.png" }
    // Add more vehicles as needed
];

// Function to populate the vehicle list
function populateVehicleList() {
    const vehicleList = document.getElementById("vehicle-list");
    vehicles.forEach(vehicle => {
        const listItem = document.createElement("li");
        const image = document.createElement("img");
        image.src = vehicle.image;
        image.alt = vehicle.name;
        const name = document.createElement("span");
        name.textContent = vehicle.name;
        listItem.appendChild(image);
        listItem.appendChild(name);
        vehicleList.appendChild(listItem);
    });
}

// Function to initialize the page
function init() {
    populateVehicleList();
}

// Initialize the page
init();
