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

function renderCars() {
  const grid = document.getElementById("car-grid");
  grid.innerHTML = cars.map(car => `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <div style="padding:20px">
        <h3>${car.name}</h3>
        <p><strong>₹${car.price}/day</strong></p>
        <button class="primary" onclick="bookCar(${car.id})">Book Now</button>
      </div>
    </div>
  `).join("");
}

function bookCar(id) {
  alert("Booking feature is prototype-based only.");
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

renderCars();
