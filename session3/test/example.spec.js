describe("an example", function() {
    var Greeter = function(name) {
        return {
            greet: function() {
                return "Hello "+name;
            }
        };
    };

    describe("The Greeter", function() {
        var testGreeter;
        beforeEach(function() {
            testGreeter = new Greeter("World");
        });

        it("should greet the specified name", function() {
            expect(testGreeter.greet()).toBe("Hello World");
        });
    });
});