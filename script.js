const cars = [
  {
    id: 1,
    name: "Maruti Baleno",
    price: 45,
    image: "images/baleno.jpg"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    price: 70,
    image: "images/creta.webp"
  },
  {
    id: 3,
    name: "Maruti Dzire",
    price: 40,
    image: "images/dzire.jpg"
  },
  {
    id: 4,
    name: "Honda City",
    price: 65,
    image: "images/hondacity.webp"
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    price: 90,
    image: "images/innova.webp"
  },
  {
    id: 6,
    name: "Kia Seltos",
    price: 75,
    image: "images/kia.jpg"
  },
  {
    id: 7,
    name: "Mahindra XUV700",
    price: 95,
    image: "images/mahindraxuv700.webp"
  },
  {
    id: 8,
    name: "Tata Nexon",
    price: 55,
    image: "images/tatanexon.webp"
  }
];

function renderCars() {
  const grid = document.getElementById("car-grid");

  grid.innerHTML = cars.map(car => `
    <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
      <img src="${car.image}" class="car-image">
      <div style="padding:24px">
        <h3 style="font-size:22px;font-weight:600">${car.name}</h3>
        <div style="margin:12px 0">
          <span style="font-size:28px;font-weight:bold;color:#3b82f6">₹${car.price}</span>
          <span style="color:#64748b">/day</span>
        </div>
        <button style="width:100%;background:#3b82f6;color:white;padding:12px;border-radius:8px">
          Book Now
        </button>
      </div>
    </div>
  `).join("");
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

renderCars();
