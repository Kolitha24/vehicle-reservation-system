document.addEventListener('DOMContentLoaded', () => {
    const vehicleSelectElement = document.getElementById('vehicle-select');
    const vehicleListElement = document.getElementById('vehicle-list');
    const reservationForm = document.getElementById('reservation-form');

    const vehicles = [
        { name: "Lorry", status: "Available", image: "images/lorry.png" },
        { name: "Canter", status: "Available", image: "images/canter.png" },
        { name: "Boom Truck", status: "Available", image: "images/boom_truck.png" },
        { name: "Three Wheeler", status: "Available", image: "images/three_wheeler.png" },
        { name: "Motor Bike", status: "Available", image: "images/motor_bike.png" }
    ];

    vehicles.forEach(vehicle => {
        if (vehicle.status === 'Available') {
            const option = document.createElement('option');
            option.value = vehicle.name;
            option.textContent = vehicle.name;
            vehicleSelectElement.appendChild(option);
        }

        // Add vehicles to the list
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = vehicle.image;
        img.alt = vehicle.name;
        li.appendChild(img);
        li.appendChild(document.createTextNode(`${vehicle.name} - ${vehicle.status}`));
        vehicleListElement.appendChild(li);
    });

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedVehicle = vehicleSelectElement.value;
        const department = document.getElementById('department').value;
        const date = document.getElementById('date').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;

        if (!selectedVehicle) {
            alert("Please select a vehicle.");
            return;
        }

        if (startTime >= endTime) {
            alert("End time must be after start time.");
            return;
        }

        alert(`Vehicle: ${selectedVehicle}\nDepartment: ${department}\nDate: ${date}\nStart Time: ${startTime}\nEnd Time: ${endTime}`);
        
        // Here you would typically send the reservation data to your backend server for processing.
    });
});
