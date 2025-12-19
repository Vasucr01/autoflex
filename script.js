// Enhanced car data with more technical details
const sampleCars = [
    {
        id: 1,
        make: "Maruti Swift Dzire",
        year: 2022,
        location: "Mumbai",
        price: 1100,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
        rating: 4.8,
        owner: "Rajesh K.",
        transmission: "Manual",
        fuel: "Petrol"
    },
    {
        id: 2,
        make: "Honda City",
        year: 2021,
        location: "Delhi",
        price: 1400,
        image: "https://images.unsplash.com/photo-1593364404571-0f72f8549382?auto=format&fit=crop&q=80&w=800",
        rating: 4.6,
        owner: "Priya S.",
        transmission: "Automatic",
        fuel: "Petrol"
    },
    {
        id: 3,
        make: "Hyundai Creta",
        year: 2023,
        location: "Bangalore",
        price: 2000,
        image: "https://images.unsplash.com/photo-1662445100041-017e2c90666d?auto=format&fit=crop&q=80&w=800",
        rating: 4.9,
        owner: "Amit R.",
        transmission: "Automatic",
        fuel: "Diesel"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    displayCars(sampleCars);
});

function displayCars(cars) {
    const carListings = document.getElementById('carListings');
    carListings.innerHTML = cars.map(car => `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover group">
            <div class="relative">
                <img src="${car.image}" alt="${car.make}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                    ⭐ ${car.rating}
                </div>
            </div>
            <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-gray-800">${car.make}</h3>
                    <span class="text-sm font-medium text-gray-500">${car.year}</span>
                </div>
                <div class="flex gap-3 mb-4">
                    <span class="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider">${car.transmission}</span>
                    <span class="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider">${car.fuel}</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">📍 ${car.location} • Hosted by ${car.owner}</p>
                <div class="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div>
                        <span class="text-xl font-bold text-blue-600">₹${car.price}</span>
                        <span class="text-gray-400 text-sm">/day</span>
                    </div>
                    <button onclick="initiateSecureBooking(${car.id})" class="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm">
                        Book Securely
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Security Feature: 2-Step Verification Simulation
function initiateSecureBooking(carId) {
    const car = sampleCars.find(c => c.id === carId);
    
    // Simulate a secure "Verification" popup
    const confirmBooking = confirm(
        `🛡️ AUTO-SECURE CHECKOUT\n\n` +
        `Vehicle: ${car.make}\n` +
        `Security Deposit: ₹2,000 (Refundable)\n\n` +
        `By clicking OK, you verify that you hold a valid Indian Driving License.`
    );

    if (confirmBooking) {
        showSuccessMessage(`Payment Securely Verified! Booking request for ${car.make} sent.`);
    }
}

function showSuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    successText.textContent = message;
    successMessage.classList.remove('hidden', 'translate-y-10', 'opacity-0');
    successMessage.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 4000);
}

// Search with simple logic
function searchCars() {
    const city = document.querySelector('select').value;
    if(city === "Select City") {
        displayCars(sampleCars);
    } else {
        const filtered = sampleCars.filter(car => car.location === city);
        displayCars(filtered);
    }
}
