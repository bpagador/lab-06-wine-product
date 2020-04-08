export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}
export function calcLineTotal(quantity, price) {
    const lineAmount = (quantity * price);
    return roundCurrency(lineAmount);
}

function roundCurrency(lineAmount) {
    return Math.round(lineAmount * 100) / 100;

}

export function calcOrderTotal(cart, wines) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const wine = findById(wines, item.id);
        const itemTotalCost = calcLineTotal(item.quantity, wine.price);
        orderTotal += itemTotalCost;
    }

    return roundCurrency(orderTotal);
}