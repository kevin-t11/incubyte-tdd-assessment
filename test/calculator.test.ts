import { add } from '../src/calculator';

describe('Calculator', () => {
    test('should return 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
});