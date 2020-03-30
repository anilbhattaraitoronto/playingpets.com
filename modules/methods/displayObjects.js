
export function displayObjects(itemArray, containerId) {
    let itemContainer = document.getElementById(containerId)

    itemArray.forEach(item => {
        let itemBox =

            `<article class="item" ">
                <img src="${item.image}" alt="${item.name}" class="item-image" />
                <h3 class="item-name">${item.name}</h3>
                <p> Price: $ <span class="item-price">${item.price}</span> </p>
                <p class="item-description">${item.description}</p>
                <button class="add-to-cart" id="${item.id}">Add To Cart </button>
            </article>`
        itemContainer.innerHTML += itemBox
    })

}