// Sample vehicle data with images
const vehicles = [
    { id: 1, name: "Lorry", image: "lorry.png" },
    { id: 2, name: "Canter", image: "canter.png" },
    { id: 3, name: "Boom Truck", image: "boom_truck.png" },
    { id: 4, name: "Three Wheeler", image: "three_wheeler.png" },
    { id: 5, name: "Motor Bike", image: "motor_bike.png" }
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

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    // Display success message
    alert("Reservation successful!");
}

// Function to initialize the page
function init() {
    populateVehicleList();
    populateVehicleSelect();
    // Add event listener to the form
    const form = document.getElementById("reservation-form");
    form.addEventListener("submit", handleFormSubmission);
}

// Initialize the page
init();
