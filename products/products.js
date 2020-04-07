import wines from '../data/wines.js';
import renderWines from './render-wines.js';

const list = document.getElementById('wines');

for (let i = 0; i < wines.length; i++) {
    const fruit = wines[i];
    const el = renderWines(fruit);
    list.appendChild(el);
}