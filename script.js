let user = null;

const cars = [
  { name:"Baleno", price:1100, img:"baleno.jpg" },
  { name:"Honda City", price:1400, img:"hondacity.webp" },
  { name:"Dzire", price:1200, img:"dzire.jpg" },
  { name:"Innova Crysta", price:2400, img:"innova.webp" },
  { name:"Kia Seltos", price:2000, img:"kia.jpg" },
  { name:"XUV700", price:2200, img:"mahindraxuv700.webp" },
  { name:"Creta", price:2100, img:"creta.webp" },
  { name:"Tata Nexon", price:1800, img:"tatanexon.webp" }
];

window.onload = () => {
  const grid = document.getElementById("carGrid");
  grid.innerHTML = cars.map(c => `
    <div class="car-card">
      <img src="${c.img}">
      <div class="p-4">
        <h3 class="font-semibold">${c.name}</h3>
        <p class="text-blue-600 font-bold">₹${c.price}/day</p>
        <p class="text-sm text-slate-500">✔ Verified • 🔒 Secure</p>
        <button onclick="book('${c.name}')">Book</button>
      </div>
    </div>
  `).join("");
};

function book(name){
  if(!user){
    toast("Login required for booking");
    openLogin();
    return;
  }
  toast(`Booked ${name}`);
}

function login(e){
  e.preventDefault();
  const email = e.target[0].value;
  user = email;
  document.getElementById("userEmail").innerText = email;
  document.getElementById("authButtons").classList.add("hidden");
  document.getElementById("userBox").classList.remove("hidden");
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
  document.getElementById("authButtons").classList.remove("hidden");
  document.getElementById("userBox").classList.add("hidden");
  toast("Logged out");
}

function showTab(tab){
  document.getElementById("rentalsTab").classList.add("hidden");
  document.getElementById("carsTab").classList.add("hidden");
  document.getElementById(tab+"Tab").classList.remove("hidden");
}

function openLogin(){ document.getElementById("loginModal").classList.remove("hidden"); }
function closeLogin(){ document.getElementById("loginModal").classList.add("hidden"); }

function openSignup(){ document.getElementById("signupModal").classList.remove("hidden"); }
function closeSignup(){ document.getElementById("signupModal").classList.add("hidden"); }

function toast(msg){
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.remove("hidden");
  setTimeout(()=>t.classList.add("hidden"),3000);
}
