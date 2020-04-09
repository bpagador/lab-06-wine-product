import wines from '../data/wines.js';
import renderWines from './render-wines.js';

const unorderedList = document.getElementById('wines');

for (let i = 0; i < wines.length; i++) {
    const wine = wines[i];
    const el = renderWines(wine);
    unorderedList.appendChild(el);
}