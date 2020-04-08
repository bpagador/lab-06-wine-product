import { findById } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('findById', assert => {
    const arrayOfWines = [
        { name: 'beaujolais', id: 2 },
        { name: 'nebbiolo', id: 4 },
    ];
    const expected = { name: 'beaujolais' };
    const actual = findById(arrayOfWines, 2);

    assert.equal(actual.name, expected.name);

});
