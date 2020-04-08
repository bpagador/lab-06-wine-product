import cart from '../data/cart.js';
import renderTableRows from './render-line-items.js';
import { findById } from '../common/utils.js';

const tbody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const wines = findById(wines, cartItem.id);
    const DOM = renderTableRows(cartItem, wines);

    tbody.appendChild(DOM);
}