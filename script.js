document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    let current = window.location.href;

    // Select all navigation links
    let navigationLinks = document.querySelectorAll('.navbar a');

    // Loop through each link
    navigationLinks.forEach(link => {
        // Check if the href of the link matches the current URL
        if (current.includes(link.getAttribute('href'))) {
            // Add 'active' class to the matching link
            link.classList.add('active');
        } else {
            // Optionally, remove 'active' class from other links
            link.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Sample dish data
    const dishes = {
        Healthconscious: [
            {
<<<<<<< HEAD
                name: "Vegan Buddha Bowl",
                description: "Quinoa, avocado, roasted veggies, and tahini dressing.",
                price: 14.99,
                image: "buddha-bowl.jpg"
            },
            {
                name: "Vegan Stir Fry",
                description: "Tofu, mixed vegetables, and soy sauce over rice.",
                price: 13.50,
                image: "stir-fry.jpg"
            },
            {
                name: "Vegan Stir Fry",
                description: "Tofu, mixed vegetables, and soy sauce over rice.",
                price: 13.50,
                image: "stir-fry.jpg"
=======
                name: "Grilled Chicken & Vegetables",
                description: "Lean chicken breast served with roasted carrots, broccoli, and zucchini.",
                price: 15000,
                image: "images/Grilled Chicken & Vegetables.webp"
            },
            {
                name: "Boiled Sweet Potatoes & Groundnut Sauce",
                description: "A classic Ugandan dish rich in fiber and protein.",
                price: 9000,
                image: "images/Boiled Sweet Potatoes & Groundnut Sauce&A classic Ugandan dish rich in fiber and protein..jpg"
            },
            {
                name: "Millet Porridge",
                description: "Energy-boosting millet porridge with a touch of honey.",
                price: 7000,
                image: "images/Millet Porridge&Energy-boosting millet porridge with a touch of honey..jpg"
>>>>>>> b7fc2a2 (Your commit message here)
            }

        ],
        "Parents&guardians": [
            {
<<<<<<< HEAD
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Fresh greens, grilled chicken, and vinaigrette.",
                price: 12.99,
                image: "chicken-salad.jpg"
            }
        ],
        "Fitness&wellness-enthusiasts": [
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },

        ],
        "Medical&special-needs-patients": [
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },

        ],
        "Seniors&elderly": [
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },

        ],
        "Students&Young-professionals": [
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },

        ],
        "Pregnant&breastfeeding-mothers": [
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },
            {
                name: "Steak Bowl",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 16.99,
                image: "steak-bowl.jpg"
            },

        ]




    };
=======
                name: "Banana Pancakes",
                description: "Soft pancakes made with ripe bananas and whole wheat flour..",
                price: 6000,
                image: "images/Banana Pancakes.webp"
            },
            {
                name: "Mashed Matoke & Beef Sauce",
                description: "Softened matoke served with beef stew.",
                price: 12000,
                image: "images/Mashed Matoke & Beef Sauce.webp"
            },
            {
                name: "Grilled Chicken Salad",
                description: "Protein-packed dish with green peas and aromatic rice.",
                price: 10000,
                image: "images/Rice & Peas.webp"
            },
        ],
        "Fitness&wellness-enthusiasts": [
            {
                name: "Grilled Chicken Breast & Brown Rice",
                description: "A lean protein meal for muscle building.",
                price: 18000,
                image: "images/Grilled Chicken Breast & Brown Rice.webp"
            },
            {
                name: " Tuna & Avocado Salad",
                description: "Omega-3-rich tuna mixed with avocado and greens.",
                price: 16000,
                image: "images/Tuna & Avocado Salad.webp"
            },
            {
                name: "Roasted Peanuts & Bananas",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 7000,
                image: "images/Roasted Peanuts & Bananas.webp"
            },
        ],
        "Medical&special-needs-patients": [
            {
                name: " Boiled Chicken & Greens",
                description: "Heart-healthy protein meal.",
                price: 15000,
                image: "images/Boiled Chicken & Greens.webp"
            },
            {
                name: "Oat Porridge",
                description: "Perfect for diabetes management.",
                price: 7000,
                image: "images/Oat Porridge.webp"
            },
            {
                name: "Boiled Yams & Fish",
                description: "Easily digestible and high in fiber.",
                price: 17000,
                image: "images/Boiled Yams & Fish.webp"
            },
        ],
        "Seniors&elderly": [
            {
                name: "Roasted Soybeans",
                description: "Grilled steak, brown rice, and steamed broccoli.",
                price: 6000,
                image: "images/Roasted Soybeans.webp"
            },
            {
                name: "Brown Rice & Beans",
                description: "Simple but nutrient-dense meal.",
                price: 10000,
                image: "images/Brown Rice & Beans.webp"
            },
            {
                name: "Boiled Cassava & Peanut Sauce",
                description: "High in fiber and protein.",
                price: 10000,
                image: "images/Boiled Cassava & Peanut Sauce.webp"
            },
        ],
        "Students&Young-professionals": [
            {
                name: "Fresh Yoghurt & Fruits",
                description: "Creamy yoghurt with banana slices.",
                price: 10000,
                image: "images/Fresh Yoghurt & Fruits.webp"
            },
            {
                name: "Ugali & Sukuma Wiki",
                description: "Maize meal porridge served with sautéed greens.",
                price: 10000,
                image: "images/Ugali & Sukuma Wiki.webp"
            },
            {
                name: "Spaghetti & Meatballs",
                description: "Whole wheat spaghetti with tomato-based meatballs.",
                price: 16000,
                image: "images/Spaghetti & Meatballs.webp"
            },
        ],
        "Pregnant&breastfeeding-mothers": [
            {
                name: " Fresh Juice & Omelette",
                description: "Nutritious eggs paired with fresh fruit juice.",
                price: 13000,
                image: "images/Fresh Juice & Omelette.webp"
            },
            {
                name: " Chicken Stew & Rice",
                description: "Chicken cooked with tomatoes, onions, and spices, served with rice.",
                price: 17000,
                image: "images/Chicken Stew & Rice.webp"
            },
            {
                name: "Peanut Butter Sandwich",
                description: "Whole wheat bread with peanut butter and honey.",
                price: 4000,
                image: "images/Peanut Butter Sandwich.webp"
            },
        ]
 };
>>>>>>> b7fc2a2 (Your commit message here)

    const categoryButtons = document.querySelectorAll('.category-btn');
    const dishesContainer = document.getElementById('dishes-container');
    const modal = document.getElementById('dish-modal');
    const closeBtn = document.querySelector('.close');
    const dishDetails = document.getElementById('dish-details');
    const confirmOrderBtn = document.getElementById('confirm-order');

    // Function to display dishes based on category
    function displayDishes(category) {
        dishesContainer.innerHTML = '';
        const categoryDishes = dishes[category] || [];
        
        categoryDishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.classList.add('dish-card');
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <h3>${dish.name}</h3>
<<<<<<< HEAD
                <p>$${dish.price}</p>
=======
                <p>${dish.price}ugx</p>
>>>>>>> b7fc2a2 (Your commit message here)
                <button class="order-btn">Order Now</button>
            `;
            dishCard.querySelector('.order-btn').addEventListener('click', () => showDishDetails(dish));
            dishesContainer.appendChild(dishCard);
        });
    }

    // Function to show dish details in modal
    function showDishDetails(dish) {
        dishDetails.innerHTML = `
            <h2>${dish.name}</h2>
            <img src="${dish.image}" alt="${dish.name}">
            <p>${dish.description}</p>
<<<<<<< HEAD
            <p>Price: $${dish.price}</p>
=======
            <p>Price: ugx${dish.price}</p>
>>>>>>> b7fc2a2 (Your commit message here)
        `;
        modal.style.display = 'block';
    }

    // Category button click event
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            displayDishes(category);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Confirm order
    confirmOrderBtn.addEventListener('click', () => {
        const selectedRestaurant = document.getElementById('restaurant-select').selectedOptions[0].text;
        alert(`Order confirmed from ${selectedRestaurant}!`);
        modal.style.display = 'none';
    });

    // Display default category (vegan) on load
    displayDishes('vegan');
    categoryButtons[0].classList.add('active');
<<<<<<< HEAD
=======
});

const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

// Manual navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        switchSlide(index);
    });
});

// Slide switching function
function switchSlide(index) {
    items[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = index;

    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Auto-rotation
setInterval(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    switchSlide(nextIndex);
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const expertsContainer = document.getElementById('expertsContainer');
    const searchInput = document.getElementById('searchInput');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const bookingModal = document.getElementById('bookingModal');
    const bookingForm = document.getElementById('bookingForm');
    const closeModal = document.querySelector('.close-modal');

    // Display experts
    function displayExperts(expertsList) {
        expertsContainer.innerHTML = '';
        expertsList.forEach(expert => {
            const card = document.createElement('div');
            card.className = 'expert-card';
            card.innerHTML = `
                <img src="${expert.image}" alt="${expert.name}">
                <h2>${expert.name}</h2>
                <p class="specialty">${expert.specialty}</p>
                <p class="bio">${expert.bio}</p>
                <p class="experience">Experience: ${expert.experience}</p>
                <p class="contact">Contact: ${expert.contact}</p>
                <p class="rating">Rating: ${expert.rating} ★</p>
                <button class="book-btn" data-id="${expert.id}">Book Appointment</button>
            `;
            expertsContainer.appendChild(card);
        });
    }

    // Initial display
    displayExperts(experts);

    // Search and filter
    function filterExperts() {
        const searchTerm = searchInput.value.toLowerCase();
        const specialty = specialtyFilter.value;

        const filteredExperts = experts.filter(expert => {
            const matchesSearch = expert.name.toLowerCase().includes(searchTerm) || 
                                 expert.specialty.toLowerCase().includes(searchTerm);
            const matchesSpecialty = specialty === 'all' || expert.specialty === specialty;
            return matchesSearch && matchesSpecialty;
        });

        displayExperts(filteredExperts);
    }

    searchInput.addEventListener('input', filterExperts);
    specialtyFilter.addEventListener('change', filterExperts);

    // Booking modal
    expertsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('book-btn')) {
            const expertId = e.target.dataset.id;
            bookingModal.style.display = 'block';
            bookingForm.dataset.expertId = expertId;
        }
    });

    closeModal.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        bookingForm.reset();
    });

    // Form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(bookingForm);
        const appointment = {
            expertId: bookingForm.dataset.expertId,
            name: formData.get('name'),
            email: formData.get('email'),
            datetime: formData.get('datetime'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        // Basic validation
        if (!appointment.name || !appointment.email || !appointment.datetime || !appointment.message) {
            alert('Please fill in all fields');
            return;
        }

        // Store in LocalStorage
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Success message
        alert('Appointment booked successfully!');
        bookingModal.style.display = 'none';
        bookingForm.reset();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.style.display = 'none';
            bookingForm.reset();
        }
    });
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    const totalItems = items.length;

    // Function to update carousel state
    function updateCarousel() {
        // Update active item
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Slide the track
        if (track) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'), 10);
            updateCarousel();
            clearInterval(autoRotate); // Stop auto-rotation on manual click
            autoRotate = setInterval(autoSlide, 5000); // Restart auto-rotation
        });
    });

    // Auto-rotation function
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Start auto-rotation
    let autoRotate = setInterval(autoSlide, 5000);

    // Recipe Button Functionality
    const recipeButtons = document.querySelectorAll('.recipe-btn');
    recipeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const recipeTitle = btn.parentElement.querySelector('h3').textContent;
            alert(`View the recipe for "${recipeTitle}"! (Details coming soon)`);
        });
    });

    // Initial carousel setup
    updateCarousel();
>>>>>>> b7fc2a2 (Your commit message here)
});