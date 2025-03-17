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

//the cards

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('meal-modal');
    const closeBtn = document.querySelector('.close');
    const mealDetails = document.getElementById('meal-details');
    const confirmOrderBtn = document.getElementById('confirm-order');

    // Add click event to all order buttons
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.meal-card');
            const mealData = JSON.parse(card.getAttribute('data-meal'));

            // Populate modal with meal details
            mealDetails.innerHTML = `
                <h2>${mealData.name}</h2>
                <img src="${mealData.image}" alt="${mealData.name}" style="width:100%;max-height:200px;object-fit:cover;">
                <p>${mealData.description}</p>
                <p>Price: $${mealData.price}</p>
            `;

            modal.style.display = 'block';
        });
    });

    // Close modal when clicking the X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle order confirmation
    confirmOrderBtn.addEventListener('click', () => {
        const selectedRestaurant = document.getElementById('restaurant-select').value;
        alert(`Order confirmed from ${document.getElementById('restaurant-select').selectedOptions[0].text}!`);
        modal.style.display = 'none';
    });
});
