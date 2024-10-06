let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Veg Burger',
        image: '1.PNG',
        price: 120
    },
    {
        id: 2,
        name: 'Non-Veg cheese Burger',
        image: '2.PNG',
        price: 200
    },
    {
        id: 3,
        name: 'Jingle Bell Pepper Burger',
        image: '3.PNG',
        price: 200
    },
    {
        id: 4,
        name: 'SuperSONIC Bacon Double Cheeseburger.',
        image: '4.PNG',
        price: 200  
    },
    {
        id: 5,
        name: 'Manchurian cheese Burger',
        image: '5.PNG',
        price: 150
    },
    {
        id: 6,
        name: 'Triple Meat Whataburger',
        image: '6.PNG',
        price: 200
    }
];

let listCards  = [];
function initApp(){
   
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


function addItem() {
    let newProduct = {
        id: products.length + 1,
        name: 'New Item',
        image: 'default.png',
        price: 50
    };
    products.push(newProduct);
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
    :Debugger;
        <img src="image/${newProduct.image}">
        <div class="title">${newProduct.name}</div>
        <div class="price">${newProduct.price.toLocaleString()}</div>
        <button onclick="addToCard(${products.length - 1})">Add To Card</button>`;
    list.appendChild(newDiv);
}
document.getElementById("addItemButton").addEventListener("click", function() {
    // Prompt the user to enter the details of the new item
    let name = prompt("Enter the name of the new item:");
    let image = prompt("Enter the URL of the image for the new item:");
    let price = parseFloat(prompt("Enter the price of the new item:"));
    
    // Create a new object for the new item
    let newItem = {
      id: products.length + 1,
      name: name,
      image: image,
      price: price
    };
    
    // Add the new item to the products array
    products.push(newItem);
    
    // Refresh the list of items on the page
    initApp();
  });
  function initApp() {
    // Clear the existing list of items
    list.innerHTML = "";
  
    // Loop through the products array and create a new item div for each item
    products.forEach(function(item) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
        <img src="${item.image}">
        <div class="title">${item.name}</div>
        <div class="price">${item.price.toLocaleString()}</div>
        <button onclick="addToCard(${item.id - 1})">Add To Card</button>
        `; 
        
      list.appendChild(newDiv);
    });
  }
let addItemBtns = document.querySelectorAll('.add-item'); // select all "add-item" buttons

addItemBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let item = btn.parentElement; // get the parent element of the button (i.e., the "item" div)
        let image = item.querySelector('img').getAttribute('src'); // get the source of the item image
        let name = item.querySelector('.title').innerText; // get the name of the item
        let price = item.querySelector('.price').innerText; // get the price of the item

        // add the item to the shopping cart
        let newItem = {
            id: listCards.length + 1,
            name: name,
            image: image,
            price: price,
            quantity: 1
        };
        listCards.push(newItem);
        reloadCard();
    });
});
  








