let currentUser = null;
let rentals = [];
let myCars = [];
let selectedCar = null;

const cars = [
  { id:1, name:"Maruti Baleno", price:45, image:"images/baleno.jpg" },
  { id:2, name:"Hyundai Creta", price:70, image:"images/creta.webp" },
  { id:3, name:"Maruti Dzire", price:40, image:"images/dzire.jpg" },
  { id:4, name:"Honda City", price:65, image:"images/hondacity.webp" },
  { id:5, name:"Toyota Innova", price:90, image:"images/innova.webp" },
  { id:6, name:"Kia Seltos", price:75, image:"images/kia.jpg" },
  { id:7, name:"Mahindra XUV700", price:95, image:"images/mahindraxuv700.webp" },
  { id:8, name:"Tata Nexon", price:55, image:"images/tatanexon.webp" }
];

function renderCars() {
  document.getElementById("car-grid").innerHTML = cars.map(c => `
    <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
      <img src="${c.image}" class="car-image">
      <div style="padding:24px">
        <h3>${c.name}</h3>
        <p><b>₹${c.price}</b> / day</p>
        <button onclick="startBooking(${c.id})"
          style="margin-top:10px;background:#3b82f6;color:white;padding:10px;border-radius:6px;width:100%">
          Book Now
        </button>
      </div>
    </div>
  `).join("");
}

function openLogin() {
  document.getElementById("login-modal").style.display = "flex";
}

function login() {
  const email = document.getElementById("loginEmail").value;
  if (!email) return alert("Enter email");
  currentUser = email;
  document.getElementById("loginBtn").innerText = email;
  document.getElementById("login-modal").style.display = "none";
}

function startBooking(id) {
  if (!currentUser) return openLogin();
  selectedCar = cars.find(c => c.id === id);
  document.getElementById("bookingCarName").innerText =
    `${selectedCar.name} (₹${selectedCar.price}/day)`;
  document.getElementById("booking-modal").style.display = "flex";
}

function confirmBooking() {
  const days = document.getElementById("bookingDays").value;
  if (!days || days <= 0) return alert("Enter valid days");

  const total = days * selectedCar.price;
  rentals.push({
    name: selectedCar.name,
    days,
    total
  });

  document.getElementById("booking-modal").style.display = "none";
  renderRentals();
}

function renderRentals() {
  document.getElementById("rentalsSection").innerHTML = rentals.map(r => `
    <div style="background:white;padding:16px;border-radius:8px;margin-bottom:10px">
      🚗 ${r.name} | ⏱ ${r.days} days | 💰 ₹${r.total}
    </div>
  `).join("");
}

function addCar() {
  document.getElementById("addcar-modal").style.display = "flex";
}

function saveCar() {
  const name = newCarName.value;
  const rent = newCarRent.value;
  const days = newCarDays.value;
  const img = newCarImage.files[0];

  if (!name || !rent || !days || !img) return alert("Fill all fields");

  myCars.push({
    name,
    rent,
    days,
    image: URL.createObjectURL(img)
  });

  document.getElementById("addcar-modal").style.display = "none";
  renderMyCars();
}

function renderMyCars() {
  document.getElementById("myCars").innerHTML = myCars.map(c => `
    <div style="background:white;padding:16px;border-radius:8px;margin-bottom:12px">
      <img src="${c.image}" style="width:100%;height:180px;object-fit:cover;border-radius:6px">
      <p><b>${c.name}</b></p>
      <p>₹${c.rent}/day | ${c.days} days</p>
    </div>
  `).join("");
}

function showTab(tab) {
  rentalsSection.style.display = tab === "rentals" ? "block" : "none";
  carsSection.style.display = tab === "cars" ? "block" : "none";
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

renderCars();
