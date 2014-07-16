(function notice() {
    $.fn.notice = function(options) {
        options = $.extend({
            message: 'empty message',
            backgroundColor: '#20B2AA',
            delay: 3000,
            left: 0
        }, options);
        return this.each(function () {
            var lastNotice = $('.notice').last();

            var newNotice = $('<div/>', {
                text: options.message
            })  .attr('class', 'notice')
                .css('top', lastNotice.offset() ? Number(lastNotice.offset().top + lastNotice.outerHeight()) : 0)
                .css('left', options.left)
                .css('right', options.right)
                .css('background', options.backgroundColor);

            newNotice.appendTo(this)
                .animate({
                    opacity: "0.9"
                }, 500).delay(options.delay).animate({
                    opacity: "0"
                }, 500);

            setTimeout(function () {
                var offsetTop = newNotice.offset().top;
                var heightNotice = offsetTop + newNotice.outerHeight();
                newNotice.remove();

                $('.notice').offset(function (index, coord) {
                    var newCoord = {};
                    newCoord.top = coord.top - heightNotice;
                    newCoord.left = coord.left;
                    return newCoord;
                });

            }, Number(options.delay)  + 1000);

        });
    };
})();