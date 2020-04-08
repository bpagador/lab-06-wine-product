import wines from '../data/fruits.js';
import renderWines from './render-fruit.js';

const list = document.getElementById('wines');

for (let i = 0; i < wines.length; i++) {
    const fruit = wines[i];
    const el = renderWines(fruit);
    list.appendChild(el);
}