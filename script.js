let currentUser = null;
let rentals = [];
let myCars = [];

const cars = [
  { id: 1, name: "Maruti Baleno", price: 45, image: "images/baleno.jpg" },
  { id: 2, name: "Hyundai Creta", price: 70, image: "images/creta.webp" },
  { id: 3, name: "Maruti Dzire", price: 40, image: "images/dzire.jpg" },
  { id: 4, name: "Honda City", price: 65, image: "images/hondacity.webp" },
  { id: 5, name: "Toyota Innova Crysta", price: 90, image: "images/innova.webp" },
  { id: 6, name: "Kia Seltos", price: 75, image: "images/kia.jpg" },
  { id: 7, name: "Mahindra XUV700", price: 95, image: "images/mahindraxuv700.webp" },
  { id: 8, name: "Tata Nexon", price: 55, image: "images/tatanexon.webp" }
];

/* ---------- LOGIN ---------- */
function openLogin() {
  document.getElementById("login-modal").style.display = "flex";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();

  if (email === "") {
    alert("Please enter email");
    return;
  }

  currentUser = email;

  // UI feedback (THIS WAS MISSING)
  document.getElementById("loginBtn").innerText = email;
  document.getElementById("loginBtn").style.borderColor = "#10b981";
  document.getElementById("loginBtn").style.color = "#10b981";

  document.getElementById("login-modal").style.display = "none";

  document.getElementById("rentalsSection").innerHTML =
    "<p>Welcome! Book a car to see your rentals.</p>";

  alert("Login successful");
}

/* ---------- RENDER CARS ---------- */
function renderCars() {
  document.getElementById("car-grid").innerHTML = cars.map(car => `
    <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
      <img src="${car.image}" class="car-image">
      <div style="padding:24px">
        <h3 style="font-size:22px;font-weight:600">${car.name}</h3>
        <div style="margin:12px 0">
          <span style="font-size:28px;font-weight:bold;color:#3b82f6">₹${car.price}</span>
          <span style="color:#64748b">/day</span>
        </div>
        <button onclick="bookCar(${car.id})"
          style="width:100%;background:#3b82f6;color:white;padding:12px;border-radius:8px">
          Book Now
        </button>
      </div>
    </div>
  `).join("");
}

/* ---------- BOOKING ---------- */
function bookCar(id) {
  if (!currentUser) {
    openLogin();
    return;
  }

  const car = cars.find(c => c.id === id);

  rentals.push({
    name: car.name,
    price: car.price,
    date: new Date().toLocaleDateString()
  });

  renderRentals();
  alert(`${car.name} booked successfully`);
}

/* ---------- RENTALS ---------- */
function renderRentals() {
  const box = document.getElementById("rentalsSection");

  if (rentals.length === 0) {
    box.innerHTML = "<p>No rentals yet.</p>";
    return;
  }

  box.innerHTML = rentals.map(r => `
    <div style="background:white;padding:20px;border-radius:8px;margin-bottom:12px">
      🚗 <b>${r.name}</b><br>
      📅 ${r.date}<br>
      💰 ₹${r.price}/day
    </div>
  `).join("");
}

/* ---------- ADD CAR ---------- */
function addCar() {
  myCars.push("User Added Car");

  document.getElementById("myCars").innerHTML = myCars.map(c =>
    `<div style="background:white;padding:16px;border-radius:8px;margin-bottom:10px">${c}</div>`
  ).join("");
}

/* ---------- TABS ---------- */
function showTab(tab) {
  document.getElementById("rentalsSection").style.display =
    tab === "rentals" ? "block" : "none";

  document.getElementById("carsSection").style.display =
    tab === "cars" ? "block" : "none";
}

/* ---------- SCROLL ---------- */
function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

renderCars();
