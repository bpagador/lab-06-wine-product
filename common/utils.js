export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    const lineAmount = (quantity * price);
    return roundCurrency(lineAmount);
}

function roundCurrency(lineAmount) {
    return Math.round(lineAmount * 100) / 100;

}