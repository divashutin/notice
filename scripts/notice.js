(function notice() {
    $.fn.notice = function(options) {
        var options = $.extend({
            message: 'empty message',
            backgroundColor: '#20B2AA',
        }, options);
        return this.each(function() {
            var lastNotice = $('.notice').last();//[left = ' + options.left + ']
            console.log(lastNotice.offset());

            var newNotice = $('<div/>', {
                    class: 'notice',
                    text: options.message
                }).css('top', lastNotice.offset() ? Number(lastNotice.offset().top + lastNotice.outerHeight()) : 0)
                .css('left', options.left)
                .css('right', options.right)
                .css('background', options.backgroundColor);

            newNotice.appendTo(this)
                .animate({
                    opacity: "0.9"
                }, 500).delay(3000).animate({
                    opacity: "0"
                }, 500);

           
            setTimeout(function () {
                var offsetTop = newNotice.offset().top
                var heightNotice = offsetTop + newNotice.outerHeight();
                //console.log(heightNotice);
                newNotice.remove();

                $('.notice').offset(function (index, coord) {
                    var newCoord = {};
                    newCoord.top = coord.top - heightNotice;
                    newCoord.left = coord.left;
                    return newCoord;
                });

            }, 4000);

        });
    };
})();