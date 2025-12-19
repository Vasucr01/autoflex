let loggedIn = false;

// ===== CAR DATA (YOUR IMAGES) =====
const cars = [
  { name:"Maruti Baleno", price:1100, img:"baleno.jpg" },
  { name:"Honda City", price:1400, img:"hondacity.webp" },
  { name:"Maruti Dzire", price:1200, img:"dzire.jpg" },
  { name:"Toyota Innova Crysta", price:2400, img:"innova.webp" },
  { name:"Kia Seltos", price:2000, img:"kia.jpg" },
  { name:"Mahindra XUV700", price:2200, img:"mahindraxuv700.webp" },
  { name:"Hyundai Creta", price:2100, img:"creta.webp" },
  { name:"Tata Nexon EV", price:1800, img:"tatanexon.webp" }
];

// ===== LOAD CARS =====
window.onload = () => {
  const grid = document.getElementById("carGrid");
  grid.innerHTML = cars.map(car => `
    <div class="car-card">
      <img src="${car.img}" alt="${car.name}">
      <div class="p-4">
        <h3 class="font-semibold text-lg">${car.name}</h3>
        <p class="text-blue-600 font-bold">₹${car.price}/day</p>
        <p class="text-sm text-slate-500">✔ Verified • 🔒 Secure</p>
        <button onclick="bookCar('${car.name}')">Book Now</button>
      </div>
    </div>
  `).join("");
};

// ===== BOOKING =====
function bookCar(name){
  if(!loggedIn){
    showToast("Please login to book");
    openLogin();
    return;
  }
  if(confirm(`Confirm booking for ${name}?`)){
    showToast(`Booking confirmed for ${name}`);
  }
}

// ===== LOGIN =====
function login(e){
  e.preventDefault();
  loggedIn = true;
  closeLogin();
  showToast("Login successful");
}

function signup(e){
  e.preventDefault();
  closeSignup();
  showToast("Account created successfully");
}

// ===== MODALS =====
function openLogin(){ document.getElementById("loginModal").classList.remove("hidden"); }
function closeLogin(){ document.getElementById("loginModal").classList.add("hidden"); }

function openSignup(){ document.getElementById("signupModal").classList.remove("hidden"); }
function closeSignup(){ document.getElementById("signupModal").classList.add("hidden"); }

// ===== TOAST =====
function showToast(msg){
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.remove("hidden");
  setTimeout(()=>t.classList.add("hidden"),3000);
}

function scrollToCars(){
  document.getElementById("cars").scrollIntoView({behavior:"smooth"});
}
