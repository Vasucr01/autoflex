// ===== SESSION (PROTOTYPE SECURITY) =====
let currentUser = null;

// ===== SAMPLE DATA =====
const cars = [
    { id:1, name:"Maruti Swift", city:"Mumbai", price:1100, rating:4.5, owner:"Rajesh" },
    { id:2, name:"Honda City", city:"Delhi", price:1400, rating:4.6, owner:"Priya" },
    { id:3, name:"Hyundai Creta", city:"Pune", price:2000, rating:4.8, owner:"Amit" }
];

// ===== LOAD CARS =====
document.addEventListener("DOMContentLoaded", () => displayCars());

// ===== DISPLAY =====
function displayCars(){
    const box = document.getElementById("carListings");
    box.innerHTML = cars.map(c => `
        <div class="bg-white p-6 rounded shadow card-hover">
            <h3 class="text-xl font-bold">${c.name}</h3>
            <p>${c.city}</p>
            <p>⭐ ${c.rating} • ✔ Verified Owner</p>
            <p class="text-orange-600 font-bold">₹${c.price}/day</p>
            <p class="text-xs text-gray-500">🔒 SSL Secured Booking</p>
            <button onclick="bookCar(${c.id})" class="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
        </div>
    `).join("");
}

// ===== BOOKING SECURITY =====
function bookCar(id){
    if(!currentUser){
        alert("Please login to book securely");
        showLoginModal();
        return;
    }
    const car = cars.find(c => c.id === id);
    if(confirm(`Confirm booking for ${car.name}?`)){
        showSuccess(`Booking confirmed for ${car.name}`);
    }
}

// ===== AUTH =====
function handleLogin(e){
    e.preventDefault();
    currentUser = { time:new Date() };
    hideLoginModal();
    showSuccess("Login successful. Secure session started.");
}

function handleSignup(e){
    e.preventDefault();
    hideSignupModal();
    showSuccess("Account created successfully.");
}

// ===== MODALS =====
function showLoginModal(){ document.getElementById("loginModal").classList.remove("hidden"); }
function hideLoginModal(){ document.getElementById("loginModal").classList.add("hidden"); }

function showSignupModal(){ document.getElementById("signupModal").classList.remove("hidden"); }
function hideSignupModal(){ document.getElementById("signupModal").classList.add("hidden"); }

// ===== UTIL =====
function showSuccess(msg){
    const box = document.getElementById("successMessage");
    box.innerText = msg;
    box.classList.remove("hidden");
    setTimeout(()=>box.classList.add("hidden"),3000);
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// ===== AUTO LOGOUT =====
setInterval(()=>{
    if(currentUser){
        alert("Session expired. Please login again.");
        currentUser = null;
    }
}, 600000);
