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
            }

        ],
        "Parents&guardians": [
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
                <p>$${dish.price}</p>
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
            <p>Price: $${dish.price}</p>
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
});