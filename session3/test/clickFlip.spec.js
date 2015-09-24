describe("The clickFlip Plugin", function() {
    var element;

    beforeEach(function() {
        element = $('<div>Element</div>');
        element.clickFlip();
    });

    it("should flip the element on mouseclick", function() {
        element.trigger("click");
        expect(element.css("transform")).toEqual("scaleY(-1)");
    });

    it("should flip it back on the second mouseclick", function() {
        element.trigger("click");
        element.trigger("click");
        expect(element.css("transform")).toEqual("scaleY(1)");
    });
});