const menuData = [
  { "id": 1, "name": "Cheese Burger", "category": "burgers", "price": 750 },
  { "id": 2, "name": "Spicy Chicken Burger", "category": "burgers", "price": 850 },
  { "id": 3, "name": "Fries", "category": "sides", "price": 300 },
  { "id": 4, "name": "Coke", "category": "drinks", "price": 200 },
  { "id": 5, "name": "Ice Cream", "category": "desserts", "price": 250 }
];

function renderMenu(items) {
  const menuContainer = document.getElementById("menuItems");
  menuContainer.innerHTML = "";

  items.forEach(item => {
    const itemCard = document.createElement("div");
    itemCard.className = "col-md-4 mb-3";
    itemCard.innerHTML = `
      <div class="card h-100 shadow-sm item-card" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">LKR ${item.price.toFixed(2)}</p>
          <button class="btn btn-sm btn-dark add-to-order">Add</button>
        </div>
      </div>
    `;
    menuContainer.appendChild(itemCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderMenu(menuData);
});





document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // demo login username and password
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: `Welcome, ${username}!`
        }).then(() => {
            window.location.href = 'order.html'; // Redirect after closing alert
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Invalid username or password'
        });
    }
});
