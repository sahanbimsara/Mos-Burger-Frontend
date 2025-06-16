 const menuItems = [
    {name:"Classic beef Burger", price: 850.00, category:"Burgers",images:""},
    {name:"Spicy Chicken Burger", price: 850.00, category:"Burgers",images:""},
    {name:"Classic beef Burger", price: 850.00, category:"Burgers",images:""},
    {name:"Classic beef Burger", price: 850.00, category:"Burgers",images:""},

 ];

 const customers = [
    {phone: '0740300830',name:'sahan bimsara',email:'sahanbimsara@gmail.com'},
    {phone: '0740300830',name:'sahan bimsara',email:'sahanbimsara@gmail.com'}
 ];
 let currentCategory = 'all';


 function updateDateTime() {
    const now = new Date();
    const options = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        secound : '2-digit',
        hour12 : true
    };

    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US',options);

    const dateOptions = {
    year : 'numberic',
    month : 'short',
    day : 'numberic' 
};

    document.getElementById('orderDate').textContent = now.toLocaleDateString('en-US',dateOptions)
}

function displayMenuItems(items) {
    const menuItemsDiv = document.getElementById('menuItems');
    menuContainer.innerHTML = '' 

    items.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'col-md-4 mb-3';
        menuItemDiv.innerHTML = `
            <div class="card menu-item h-100" onclick="addToOrder('${item.name}', ${item.price})">
                <div class="card-body text-center">
                    <img src="images/${item.image}" alt="${item.name}" class="mb-2">
                    <h6 class="card-title">${item.name}</h6>
                    <p class="card-title fw-bold text-primary">LKR ${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItemDiv);
    });
}

function filterByCategory(category){
    currentCategory = category;
    const filteredItems = category === 'all' ? menuItems : menuItems.filter()
}


function updateOrderDisplay(){
    const selectedItemsContainer = document.getElementById('selectedItems');
    const totalAmount = document.getElementById('totalAmount');

    selectedItemsContainer.innerHTML = '';
    let total = 0;

    selectedItemsContainer.forEach((item,index)=>{
        const itemDiv = document.createElement('div');
        itemDiv.className = 'd-flex justify-content-between align-items-center mb-2';
        
    })
}




updateDateTime();
setInterval(updateDateTime, 1000);
displayMenuItems(menuItems);





// Work to do 


//  item add karala delete button eka 

// item ekak click karama pop up ekak awilla customer details collec karaganna function ekak hadanna 


// item search wena funtion eka hadanna 