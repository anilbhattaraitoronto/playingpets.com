
import { products } from '/modules/data/products.js'


export function addToCart() {
    let productContainer = document.getElementById('product-container')
    let cartItemContainer = document.getElementById('cart')
    productContainer.addEventListener('click', (event) => {
        let targetItem = event.target
        if (targetItem.className === 'add-to-cart') {
            let itemId = targetItem.id
            let cartItem = products.find(product => product.id === itemId)
            targetItem.disabled = true
            let cartItemBox =
                `<article class="cart-item" ">
            <img src="${cartItem.image}" alt="${cartItem.name}" class="cart-item-image" />
            <h3 class="cart-item-name">${cartItem.name}</h3>
            <p> Price: $ <span class="cart-item-price">${cartItem.price}</span> </p>
            
            <button class="remove-cart-item" id="${cartItem.id}">Remove</button>
        </article>`
            cartItemContainer.innerHTML += cartItemBox

        }

    })
}

//reference to cart item container
//add event listener to product buttons
//create empty array of added objects
//display added items from the array on the cart
//create template of cart items that also has buttons to update item quantity and remove items
//create function to add total price