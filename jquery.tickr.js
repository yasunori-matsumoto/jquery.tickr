/*!
 * jQuery Tickr - show tickr like marqee
 * (c) CATERS https://www.caters.co.jp/
 * MIT Licensed.
 */
(function($) {
  $.fn.tickr = function(options) {
    options = $.extend({
      speed : 100,
      span : 100
    }, options);
    
    var _target;
		var _width		 = 0;
		var _currentX	 = 0;
		var _gotoX		 = 0;
		var _html			 = '';
		var _fps	     = 1000 / 60;
		var _timer;

    return this.each(function() {
      _target = $(this);

      _html += _target.html();
      _target.append(_html);

			_target.children().each(function() {
        $(this).css({float:'left', 'margin-right':options.span});
				_width += $(this).outerWidth();
        _width += options.span;
			});
      _width += 1;

      _target.css({width: _width}).wrap('<div></div>');
      _target.parent('div').css({width:'100%', overflow:'hidden', 'white-space':'nowrap'});
      _gotoX = _width/2;

      _timer = setInterval(_moveHd, 1000/60);
    });

		function _moveHd() {
      console.log(0);
			_currentX --;
			if (_currentX < -_gotoX)	{
				_currentX = 0;
			}
			_target.css({'margin-left':_currentX});
		}
  };
}(jQuery));