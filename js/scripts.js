const $form = $('#search-form');
const $input = $('[name = "clip-name"]');
let $clips = [];
const $button = $('#button-submit');
const $holder = $('.content-holder')
let text = 'park';




const createContent = (data) => {
    $('#clip-list').detach();
    $('.no-results').detach();
    //console.log(data);
    data = JSON.parse(data);
    $clips = data['results'];
    
    if($clips.length === 0) {
        $holder
            .append(
                $('<p>')
                .text('No results')
                .addClass('no-results')
            )
    } else {
        $holder
        .append(
            $('<ul>')
                .addClass('clips-link slider')
                .attr({ id: 'clip-list' })
        )
        $clips.forEach((item) => {
            if (item['trackName'] === undefined) {
                item['trackName'] = 'Anonimus';
            }
            if (item['artistName'] === undefined) {
                item['artistName'] = 'Anonimus';
            }
            if (item['collectionName'] === undefined) {
                item['collectionName'] = 'No collection';
            }

            $('.clips-link')
                .append(
                    $('<li>')
                        .append(
                            $('<div>')
                                .addClass('video-block')
                                .append(
                                    $('<video>')
                                        .append(
                                            $('<source>')
                                                .attr({ src: item['previewUrl'], type: 'video/mp4' })
                                        )
                                        .attr({ width: '100%', height: '100%', controls: "controls"})
                                        .addClass('video-track')
                                )
                        )
                        .append(
                            $('<h2>')
                                .text(item['trackName']).addClass('video-name')
                        )
                        .append(
                            $('<h3>')
                                .text(item['artistName']).addClass('video-artist')
                        )
                        .append(
                            $('<h3>')
                                .text('Collection: ' + item['collectionName']).addClass('video-collname')
                        )
                        .addClass('clips-item')
                        .appendTo($('.clips-link'))
                )
        })
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            adaptiveHeight: true,
            onAfterChange : function() {
                player.stopVideo();
            }
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(".video-track").each(function(){
              this.pause();
            });
        });
    }
}

const getInfo = (text) => {
    $.get("https://itunes.apple.com/search?limit=10&entity=musicVideo&term=" + text, {})
        .done((response) =>
            createContent(response))
        .fail((error) => {
            console.log(error);
        })
}

$form.on('submit', (event) => { // on = обработчик событий
    event.preventDefault();
    const text = $input.val().replaceAll(' ', '+'); // значение инпута val()
    if (text) {
        getInfo(text);
    }
});

getInfo(text);




