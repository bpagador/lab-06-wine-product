// IMPORT MODULES under test here:
// import example from '../src/example.js';
import wines from '../data/wines.js';
import { findById } from '../common/utils.js';
import { calcLineTotal } from '../common/utils.js';
import { calcOrderTotal } from '../common/utils.js';


const test = QUnit.test;

test('find product by id', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'beaujolais';
    const expected = 'Beaujolais';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundWine = findById(wines, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.ok(foundWine);
    assert.equal(foundWine.name, expected);
});

test('find product by id', assert => {
    const id = 'not found';
    const expected = null;

    const foundWine = findById(wines, id);

    assert.equal(foundWine, expected);

});

test('calculate line item total', assert => {
    const quantity = 2;
    const price = 3.05;
    const expected = 6.10;

    const lineTotal = calcLineTotal(quantity, price);

    assert.equal(lineTotal, expected);

});

test('calculate order total', assert => {
    const expected = 76 ;
    const cart = [{ id: 'beaujolais', quantity: 2 }, { id: 'nebbiolo', quantity: 2 }];


    const orderTotal = calcOrderTotal(cart, wines);

    assert.equal(orderTotal, expected);

});