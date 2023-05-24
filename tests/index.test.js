/**
 * Write a unit test for index.js
 */
const sum = require('../index');

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should return the sum of two numbers', () => {
        expect(sum(-1, -2)).not.toBe(3);
    });
});