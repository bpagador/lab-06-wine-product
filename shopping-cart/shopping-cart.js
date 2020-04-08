import cart from '../data/cart.js';
import wines from '..data/cart.js';
import renderTableRows from './render-line-items.js';
import { findById } from '../common/utils.js';
import { calcOrderTotal } from '../common/utils.js';
import { toUSD } from '../common/utils.js';


const tbody = document.querySelector('tbody');
const totalAmount = document.getElementById('total-amount');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const wines = findById(wines, cartItem.id);
    const DOM = renderTableRows(cartItem, wines);

    tbody.appendChild(DOM);
}

const orderTotal = calcOrderTotal(cart, wines);
totalAmount.textContent = toUSD(orderTotal);

