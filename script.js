// Sample vehicle data
const vehicles = [
    { id: 1, name: "Lorry" },
    { id: 2, name: "Canter" },
    { id: 3, name: "Batta" },
    { id: 4, name: "boom truck" },
    { id: 5, name: "Moto Bike" },
    // Add more vehicles as needed
];

// Function to populate the vehicle select dropdown
function populateVehicleSelect() {
    const vehicleSelect = document.getElementById("vehicle-select");
    vehicles.forEach(vehicle => {
        const option = document.createElement("option");
        option.value = vehicle.id;
        option.textContent = vehicle.name;
        vehicleSelect.appendChild(option);
    });
}

// Function to initialize the page
function init() {
    populateVehicleSelect();
}

// Initialize the page
init();
