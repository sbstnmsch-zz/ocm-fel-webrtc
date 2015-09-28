import $ from 'jquery';

(function() {
    window.app = window.app || {};

    app.invert = function(num) {
        return -num;
    };

    app.init = function() {
        registerJQueryPlugins();
    };

    function registerJQueryPlugins() {
        (function($) {

            var Flipper = function(element) {
                var scale = 1;
                return function() {
                    scale = app.invert(scale);
                    element.css({
                        'transform': 'scaleY('+scale+')'
                    });
                };
            };
            $.fn.clickFlip = function() {
                return this.each(function() {
                    var element = $( this );
                    var flip = new Flipper(element);
                    element.click(flip);
                });
            };
        }($));
    }

    app.init();
})();
