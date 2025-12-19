let user = null;

const cars = [
  {name:"Baleno", price:1100, img:"baleno.jpg"},
  {name:"Honda City", price:1400, img:"hondacity.webp"},
  {name:"Dzire", price:1200, img:"dzire.jpg"},
  {name:"Innova Crysta", price:2400, img:"innova.webp"},
  {name:"Kia Seltos", price:2000, img:"kia.jpg"},
  {name:"XUV700", price:2200, img:"mahindraxuv700.webp"},
  {name:"Creta", price:2100, img:"creta.webp"},
  {name:"Tata Nexon", price:1800, img:"tatanexon.webp"}
];

window.onload = () => {
  const grid = document.getElementById("carGrid");
  grid.innerHTML = cars.map(c => `
    <div class="car-card">
      <img src="${c.img}">
      <div class="p-4">
        <h3 class="font-semibold">${c.name}</h3>
        <p class="price">₹${c.price}/day</p>
        <p class="meta">✔ Verified • 🔒 Secure</p>
        <button onclick="book('${c.name}')">Book Now</button>
      </div>
    </div>
  `).join("");
};

function book(name){
  if(!user){
    toast("Login required");
    openLogin();
    return;
  }
  toast(`Booking confirmed for ${name}`);
}

function login(e){
  e.preventDefault();
  user = e.target[0].value;
  document.getElementById("userEmail").innerText = user;
  document.getElementById("authArea").classList.add("hidden");
  document.getElementById("userArea").classList.remove("hidden");
  closeLogin();
  toast("Login successful");
}

function signup(e){
  e.preventDefault();
  closeSignup();
  toast("Account created");
}

function logout(){
  user = null;
  document.getElementById("authArea").classList.remove("hidden");
  document.getElementById("userArea").classList.add("hidden");
  toast("Logged out");
}

function showTab(tab){
  rentalsTab.classList.add("hidden");
  carsTab.classList.add("hidden");
  document.getElementById(tab+"Tab").classList.remove("hidden");
}

function openLogin(){ loginModal.classList.remove("hidden"); }
function closeLogin(){ loginModal.classList.add("hidden"); }
function openSignup(){ signupModal.classList.remove("hidden"); }
function closeSignup(){ signupModal.classList.add("hidden"); }

function toast(msg){
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.remove("hidden");
  setTimeout(()=>t.classList.add("hidden"),3000);
}
