$(function() {
    
    $('audio.fade').on('play', function() {
        this.volume = 0;
        $(this).animate({volume: $(this).attr('data-volume') || 1}, 1000);
        if ($(this).hasClass('loop')) {
            loopAudio($(this));
        }
    });
    $('.start-btn').click(function() {
        $(this).parent().siblings('audio')[0].play();
        $(this).parent().children('.uk-button-primary').toggleClass('uk-hidden');
    });
    $('.stop-btn').click(function() {
        $(this).attr('disabled', true);
        var audio = $(this).parent().siblings('audio');
        audio.animate({volume: 0}, 1000, function() {
            console.log($(this));
            audio[0].pause();
            audio[0].currentTime = 0;
            audio.parent().find('.uk-button-primary').removeAttr('disabled').toggleClass('uk-hidden');
        });
    });
    
    $('.rev-btn').click(function() {
        var audio = $(this).parent().siblings('audio');
        audio[0].preservesPitch = false;
        audio.animate({
            volume: audio[0].volume + 0.4,
            playbackRate: 2
        }, 1000);
    });
    $('.idle-btn').click(function() {
        var audio = $(this).parent().siblings('audio');
        audio.animate({
            volume: audio.attr('data-volume'),
            playbackRate: 1
        }, 1000);
    });
});

function loopAudio(el) {
    /*if (!el[0].paused) {
        setTimeout(function() {
            el[0].currentTime = 0;
            loopAudio(el);
        }, el[0].duration * 1000 - 10);
    }*/
    if (el[0].currentTime * 1000 + 50 >= el[0].duration * 1000) {
        el[0].currentTime = 0;
        loopAudio(el);
    }
    else {
        setTimeout(function() {
            loopAudio(el);
        }, 10);
    }
}