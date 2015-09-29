import $ from 'jquery';
import { invert } from 'src/js/lib/invert';

(function($) {

    const Flipper = (element) => {
        let scale = 1;
        return () => {
            scale = invert(scale);
            element.css({
                'transform': `scaleY(${scale})`
            });
        };
    };
    $.fn.clickFlip = function() {
        return this.each(function() {
            let element = $(this);
            let flip = new Flipper(element);
            element.click(flip);
        });
    };
}($));
