const mult = require('./add');

describe('Mult', () => {
    var expect = require('expect');
    
    it('Multiply of 0 and 0 is 0', () => {
        expect(mult(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 1 is 1', () => {
        expect(mult(1, 1)).toEqual(1);
    });
    it('Sum of 5 and 5 is 25', () => {
        expect(mult(5, 5)).toEqual(25);
    });

})
