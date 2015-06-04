/*!
 * jQuery DiffViewer - show image diff
 * (c) CATERS https://www.caters.co.jp/
 * MIT Licensed.
 */
(function($) {
  $.fn.diffViewer = function(options) {
    var $target, $before, $after, _before, _after, _maxX, _currentX;
    options = $.extend({
      before : '.before',
      after : '.after'
    }, options);

    return this.each(function() {
      $target = $(this);
      _maxX = $target.width();

      $before = $target.find(options.before);
      $after  = $target.find(options.after);

      $before.css({position:'absolute', left:0, top:0, width:'100%', height:'100%', 'background': 'url(' + $before.find('img').attr('src') + ') no-repeat top left'}).find('img').remove();
      $after.css({position:'absolute', right:0, top:0, width:'50%', height:'100%', 'background': 'url(' + $after.find('img').attr('src') + ') no-repeat top right'}).find('img').remove();
      
      $(window).bind('mousemove', onMouseMoveHD);
    });

    function onMouseMoveHD(e) {
      _currentX = -(e.pageX - $target.offset().left - _maxX)/_maxX;
      _currentX = Math.max(0, _currentX);
      _currentX = Math.min(100, _currentX);

      $after.css({width : (_currentX * 100) + '%'});
    }
  };
}(jQuery));