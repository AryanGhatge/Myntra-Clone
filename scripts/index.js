let itemContainerElement = document.querySelector('.items-container');
let innerHTML = '';

items.forEach(item => {
    innerHTML += `
    <div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="Item-Image">
        <div class="rating">${item.rating.stars}⭐ | ${item.rating.noOfReview}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="pricing">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount}% OFF</span>
        </div>
        <button class="btn-add-bag">Add to Bag</button>
    </div>
    `;
});

itemContainerElement.innerHTML = innerHTML;