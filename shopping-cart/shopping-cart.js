import wines from '../data/wines.js';
import renderTableRows from './render-line-items.js';
import { findById } from '../common/utils.js';
import { calcOrderTotal } from '../common/utils.js';
import { toUSD } from '../common/utils.js';


const tbody = document.querySelector('tbody');
const totalAmount = document.getElementById('total-amount');
let json = localStorage.getItem('CART');
json = JSON.parse(json);
const placeOrderButton = document.getElementById('place-order-button');

for (let i = 0; i < json.length; i++) {
    const cartItem = json[i];
    const wine = findById(wines, cartItem.id);
    const DOM = renderTableRows(cartItem, wine);

    tbody.appendChild(DOM);
}

const orderTotal = calcOrderTotal(json, wines);
totalAmount.textContent = toUSD(orderTotal);

if (json.length === 0) {
    placeOrderButton.disabled = true;

} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order place:\n' + JSON.stringify(json, true, 2));
        window.location = '../';
    });
}
