(function() {
    $.fn.notice = function(options) {
       /* var options = $.extend({
            background: '#20B2AA'
        });*/
        return this.each(function() {
            var lastNotice = $('body .notice').last();

            var newNotice = $('<div/>', {
                class: 'notice',
                text: '1111111',
            }).css('top', lastNotice.offset() ? Number(lastNotice.offset().top + lastNotice.outerHeight()) : 0);

            newNotice.appendTo(this)
                .animate({
                    opacity: "0.9"
                }, 700).delay(2000).animate({
                    opacity: "0"
                }, 700);
            setTimeout(function() { newNotice.remove(); }, 2000);

        });
    };
})();