(function ( $ ) {

    var Flipper = function(element) {
        var scale = 1;
        return function() {
            scale = scale * -1;
            element.css({
                'transform': 'scaleY('+scale+')'
            });
        }
    };
    $.fn.flip = function() {
        return this.each(function() {
            var element = $( this );
            element.click(new Flipper(element));
        });
    };
}(jQuery));