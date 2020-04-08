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

    const usd = '$' + wines.price;
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = wines.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderWines;