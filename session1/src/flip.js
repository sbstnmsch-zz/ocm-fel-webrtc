(function ( $ ) {
    $.fn.flip = function() {
        return this.each(function() {
            var element = $( this );
            element.click(function() {
               element.css({
                    '-moz-transform': 'scaleX(-1)',
                    '-o-transform': 'scaleX(-1)',
                    '-webkit-transform': 'scaleX(-1)',
                    'transform': 'scaleX(-1)',
                    'filter': 'FlipH',
                    '-ms-filter': 'FlipH'
               });
            });
        });
    };
}(jQuery));