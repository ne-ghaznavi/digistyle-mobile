// select element
let shoppingCartBtn = document.getElementsByClassName('shopping-cart-btn')[0];
let favoritesLisBtn = document.getElementsByClassName('favorites-list-btn')[0];
let shoppingCartSection = document.getElementsByClassName('shopping-cart-section')[0];
let favoritesListSection = document.getElementsByClassName('favorites-list-section')[0];



// add event
shoppingCartBtn.addEventListener('click', showshoppingCartSection);
favoritesLisBtn.addEventListener('click', showsfavoritesLisSection);


// function
function showshoppingCartSection() {
    shoppingCartBtn.style.backgroundColor = '#f9fafb';
    favoritesLisBtn.style.backgroundColor = 'white';
    favoritesListSection.classList.remove('show-favorites-list-section');
}

function showsfavoritesLisSection() {
    shoppingCartBtn.style.backgroundColor = 'white';
    favoritesLisBtn.style.backgroundColor = '#f9fafb';
    favoritesListSection.classList.add('show-favorites-list-section');
}