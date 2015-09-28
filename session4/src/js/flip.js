import $ from 'jquery';
import { invert } from 'src/js/lib/invert';

function init() {
    registerJQueryPlugins();
}

function registerJQueryPlugins() {
    (function($) {

        var Flipper = function(element) {
            var scale = 1;
            return function() {
                scale = invert(scale);
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

init();
