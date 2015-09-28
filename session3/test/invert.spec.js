describe("invert function", function() {
    it("should invert a number", function() {
        expect(app.invert(1)).toBe(-1);
        expect(app.invert(-1)).toBe(1);
        expect(app.invert(0)).toBe(0);
    });
});
