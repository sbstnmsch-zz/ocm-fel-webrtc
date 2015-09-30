import { invert } from 'src/js/lib/invert';

(function($) {

  const flipFnFactory = (element, scale=1) => {
    return () => {
      element.css(
        'transform',
        `scaleY(${scale = invert(scale)})`
      );
    };
  };

  $.fn.clickFlip = function() {
    return this.each(function() {
      let
        element = $(this),
        flip = flipFnFactory(element);
      element.on('click', flip);
    });
  };

}($));
