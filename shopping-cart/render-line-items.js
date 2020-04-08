export function findById(arrayOfWines, beaujolais) {
    let wineMatch = {};

    for (let i = 0; i < arrayOfWines.length; i++) {
        const wineBottle = arrayOfWines[i];

        if (wineBottle.id === beaujolais) {
            wineMatch = wineBottle;

        }
    }
    return wineMatch;
}

export function makeReadablePrice(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;

}

function renderTableRows(cartItem, wines) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = wines.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = makeReadablePrice(wines.price);

    const totalTd = document.createElement('td');
    const totalAmount = (wines.price * cartItem.quantity);
    totalTd.textContent = makeReadablePrice(totalAmount);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);
    
    return tr;
}

export default renderTableRows;