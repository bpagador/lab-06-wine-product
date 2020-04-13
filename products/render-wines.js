import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

function renderWines(wines) {
    const li = document.createElement('li');
    li.className = wines.category;
    li.title = wines.description;

    const h3 = document.createElement('h3');
    h3.textContent = wines.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + wines.image;
    img.alt = wines.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(wines.price);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = wines.id;
    button.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        if (json) {
            json = JSON.parse(json);   
        } else {
            json = [];

        }

        let wineItem = findById(json, wines.id);

        if (!wineItem) {
            wineItem = {
                id: wines.id,
                quantity: 1
            };

            json.push(wineItem);
        } else {
            wineItem.quantity++;
        }

        json = JSON.stringify(json);
        localStorage.setItem('CART', json);

        alert('1 ' + wines.name + ' added to cart!');

    });



    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderWines;