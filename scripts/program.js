(function() {
    var $form = $('.optionsForm')[0];
    var $mess = $('#message')[0];

    $form.addEventListener('click', function (e) {
        if (e.target.type == 'button') {
            var $messageType = $('.messageType:checked')[0];
            var $position = $('.position:checked')[0];

            $('.content').notice({
                message: $mess.value ? $mess.value : undefined,
                backgroundColor: getBackgroundColor[$messageType.id],
                left: $position.value == 'left' ? 0 : undefined,
                right: $position.value == 'right' ? 0 : undefined
            });
        }
    }, false);

    var getBackgroundColor = {
        'success': function () { return '#20B2AA'; },
        'info': function () { return '#FFFF00'; },
        'warning': function () { return '#FFD700'; },
        'error': function () { return '#FF3030'; }
    };
})();