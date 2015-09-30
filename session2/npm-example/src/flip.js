(function ( $ ) {

    var flipFnFactory = function(element) {
        var scale = 1;
        return function() {
            scale = scale * -1;
            element.css({
                'transform': 'scaleY('+scale+')'
            });
        }
    };
    $.fn.clickFlip = function() {
        return this.each(function() {
            var element = $( this );
            var flip = flipFnFactory(element);
            element.click(flip);
        });
    };
}(jQuery));
