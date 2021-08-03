const add = require('./add');

describe('Add', () => {
    var expect = require('expect');
    
    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });
    it('Sum of 1 and 5 is 6', () => {
        expect(add(1, 5)).toEqual(6);
    });

})
