import { invert } from 'src/js/lib/invert';

describe("invert function", function() {
    it("should invert a number", function() {
        expect(invert(1)).toBe(-1);
        expect(invert(-1)).toBe(1);
        expect(invert(0)).toBe(0);
    });
});
