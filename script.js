// Sample vehicle data with images
const vehicles = [
    { id: 1, name: "Lorry", image: "lorry.png" },
    { id: 2, name: "Canter", image: "canter.png" },
    { id: 3, name: "Boom Truck", image: "boom_truck.png" },
    { id: 4, name: "Three Wheeler", image: "three_wheeler.png" },
    { id: 5, name: "Motor Bike", image: "motor_bike.png" }
];

let selectedVehicleId = null;

// Function to populate the vehicle list
function populateVehicleList() {
    const vehicleList = document.getElementById("vehicle-list");
    vehicles.forEach(vehicle => {
        const listItem = document.createElement("li");
        listItem.dataset.vehicleId = vehicle.id;

        const image = document.createElement("img");
        image.src = vehicle.image;
        image.alt = vehicle.name;

        const name = document.createElement("span");
        name.textContent = vehicle.name;

        listItem.appendChild(image);
        listItem.appendChild(name);
        vehicleList.appendChild(listItem);

        listItem.addEventListener("click", () => {
            selectVehicle(vehicle.id);
        });
    });
}

// Function to handle vehicle selection
function selectVehicle(vehicleId) {
    selectedVehicleId = vehicleId;
    document.getElementById("selected-vehicle").value = vehicleId;

    // Highlight selected vehicle
    document.querySelectorAll(".vehicle-list li").forEach(item => {
        item.classList.remove("selected");
    });
    document.querySelector(`[data-vehicle-id="${vehicleId}"]`).classList.add("selected");
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    if (!selectedVehicleId) {
        alert("Please select a vehicle.");
        return;
    }

    // Generate a ticket
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const vehicleName = vehicles.find(vehicle => vehicle.id === selectedVehicleId).name;

    const ticket = {
        token: generateToken(),
        vehicle: vehicleName,
        department,
        date,
        startTime,
        endTime
    };

    displayTicket(ticket);
}

// Function to generate a random token
function generateToken() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Function to display the ticket
function displayTicket(ticket) {
    const ticketContainer = document.createElement("div");
    ticketContainer.className = "ticket";

    ticketContainer.innerHTML = `
        <h2>Reservation Ticket</h2>
        <p><strong>Token:</strong> $
