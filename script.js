
        // Sample car data
        const sampleCars = [
            {
                id: 1,
                make: "Maruti Swift Dzire",
                year: 2022,
                location: "Mumbai",
                price: 1100,
                image: src="dzire.jpg" ,              
                owner: "Rajesh K."
            },
            {
                id: 2,
                make: "Honda City",
                year: 2021,
                location: "Delhi",
                price: 1400,
                image: src="hondacity.webp" ,
                rating: 4.6,
                owner: "Priya S."
            },
            {
                id: 3,
                make: "Hyundai Creta",
                year: 2023,
                location: "Bangalore",
                price: 2000,
                image: src="creta.webp" ,
                rating: 4.9,
                owner: "Amit R."
            },
            {
                id: 4,
                make: "Tata Nexon EV",
                year: 2022,
                location: "Pune",
                price: 1800,
                image: src="tatanexon.webp" ,
                rating: 4.7,
                owner: "Sneha M."
            },
            {
                id: 5,
                make: "Mahindra XUV700",
                year: 2021,
                location: "Chennai",
                price: 2200,
                image: src="mahindraxuv700.webp" ,
                rating: 4.5,
                owner: "Vikram P."
            },
            {
                id: 6,
                make: "Toyota Innova Crysta",
                year: 2020,
                location: "Hyderabad",
                price: 2400,
                image: src="innova.webp" ,
                rating: 4.4,
                owner: "Kavya T."
            },
            {
                id: 7,
                make: "Maruti Baleno",
                year: 2023,
                location: "Kolkata",
                price: 1100,
                image: src="baleno.jpg" ,
                rating: 4.3,
                owner: "Arjun D."
            },
            {
                id: 8,
                make: "Kia Seltos",
                year: 2022,
                location: "Ahmedabad",
                price: 2000,
                image: src="kia.jpg" ,
                rating: 4.6,
                owner: "Ritu G."
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayCars(sampleCars);
        });

        // Display cars function
        function displayCars(cars) {
            const carListings = document.getElementById('carListings');
            carListings.innerHTML = cars.map(car => `
                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <img src="${car.image}" alt="${car.make}" class="w-full h-48 object-cover" onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">${car.make}</h3>
                        <p class="text-gray-600 mb-2">📍 ${car.location} • ${car.year}</p>
                        <p class="text-gray-600 mb-2">⭐ ${car.rating} • Owner: ${car.owner}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-orange-600">₹${car.price}/day</span>
                            <button onclick="bookCar(${car.id})" class="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Book Now</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search cars function
        function searchCars() {
            // In a real app, this would filter based on the form inputs
            showSuccessMessage("Search completed! Showing available cars.");
            displayCars(sampleCars);
        }

        // Book car function
        function bookCar(carId) {
            const car = sampleCars.find(c => c.id === carId);
            showSuccessMessage(`Booking request sent for ${car.make}! Owner will be notified.`);
        }

        // Modal functions
        function showLoginModal() {
            document.getElementById('loginModal').classList.remove('hidden');
            document.getElementById('loginModal').classList.add('flex');
        }

        function hideLoginModal() {
            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('loginModal').classList.remove('flex');
        }

        function showSignupModal() {
            document.getElementById('signupModal').classList.remove('hidden');
            document.getElementById('signupModal').classList.add('flex');
        }

        function hideSignupModal() {
            document.getElementById('signupModal').classList.add('hidden');
            document.getElementById('signupModal').classList.remove('flex');
        }

        // Form handlers
        function handleLogin(event) {
            event.preventDefault();
            hideLoginModal();
            showSuccessMessage("Login successful! Welcome back to AutoFlex.");
        }

        function handleSignup(event) {
            event.preventDefault();
            hideSignupModal();
            showSuccessMessage("Account created successfully! Welcome to AutoFlex.");
        }

        function submitCarListing(event) {
            event.preventDefault();
            showSuccessMessage("Car listing submitted! It will be reviewed and published within 24 hours.");
            event.target.reset();
        }

        // Navigation function
        function showSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        // Booking tab functionality
        function showBookingTab(tab) {
            const renterTab = document.getElementById('renterTab');
            const ownerTab = document.getElementById('ownerTab');
            const renterBookings = document.getElementById('renterBookings');
            const ownerBookings = document.getElementById('ownerBookings');

            if (tab === 'renter') {
                renterTab.classList.add('bg-orange-600', 'text-white');
                renterTab.classList.remove('text-gray-600');
                ownerTab.classList.remove('bg-orange-600', 'text-white');
                ownerTab.classList.add('text-gray-600');
                renterBookings.classList.remove('hidden');
                ownerBookings.classList.add('hidden');
            } else {
                ownerTab.classList.add('bg-orange-600', 'text-white');
                ownerTab.classList.remove('text-gray-600');
                renterTab.classList.remove('bg-orange-600', 'text-white');
                renterTab.classList.add('text-gray-600');
                ownerBookings.classList.remove('hidden');
                renterBookings.classList.add('hidden');
            }
        }

        // Success message function
        function showSuccessMessage(message) {
            const successMessage = document.getElementById('successMessage');
            const successText = document.getElementById('successText');
            successText.textContent = message;
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 4000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98e77ecf862f7766',t:'MTc2MDQ0OTI5OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})()