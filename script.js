const cars = [const cars = [
  { name: "Maruti Baleno", price: 45, image: "images/baleno.jpg" },
  { name: "Hyundai Creta", price: 70, image: "images/creta.webp" },
  { name: "Maruti Dzire", price: 40, image: "images/dzire.jpg" },
  { name: "Honda City", price: 65, image: "images/hondacity.webp" },
  { name: "Toyota Innova Crysta", price: 90, image: "images/innova.webp" },
  { name: "Kia Seltos", price: 75, image: "images/kia.jpg" },
  { name: "Mahindra XUV700", price: 95, image: "images/mahindraxuv700.webp" },
  { name: "Tata Nexon", price: 55, image: "images/tatanexon.webp" }
];

function renderCars() {
  const grid = document.getElementById("car-grid");

  grid.innerHTML = cars.map(car => `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <div class="car-info">
        <h3>${car.name}</h3>
        <div class="price">₹${car.price}/day</div>
        <button onclick="bookCar('${car.name}')">Book Now</button>
      </div>
    </div>
  `).join("");
}

function bookCar(name) {
  alert(`${name} booking is prototype-based (demo only).`);
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

renderCars();


