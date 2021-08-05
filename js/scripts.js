const $form = $('#search-form');
const $input = $('[name = "clip-name"]');
const $list = $('#clip-list');
const clips = [];
const $button = $('#button-submit');




const createContent = (data) => {
    $list.empty();
    $clips = data;
    console.log($clips);
    /*data.forEach((item) => {
         $('<li>')
         .append(
            $('<a href="">')
            .text(item.volumeInfo.title)
         )
        .attr('data-id', item.id)
        .addClass('list-group-item')
        .appendTo($list)
    });*/
}

const getInfo = (text) => {
    $.get("https://itunes.apple.com/search", {limit: 10, entity: musicVideo, term:text})
    .done((response) =>
        createContent(response.items))
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
    // $button.keydown(function(e) {
    //     if(e.keyCode === 13) {
    //       // можете делать все что угодно со значением текстового поля console.log($(this).val());
    //     }
    // });
});


$list.on('click', '[data-id]', function(event) {
    event.preventDefault();
    const bookID = $(this).data('id');
    const {volumeInfo} = $books.find(item => item.id === bookID);
    $currentBook.fadeIn();
    $currentBook.find('.book-title')
    .text(`${volumeInfo.title} | ${volumeInfo.authors.join(", ")} (${volumeInfo.publishedDate})`);

    const $bookDescription = $currentBook.find('.book-description');
    $bookDescription.empty();

    $('<img>').attr('src', volumeInfo.imageLinks.thumbnail)
    .appendTo($bookDescription);

    $('<p>').text(volumeInfo.description)
    .appendTo($bookDescription);
    $('<a>').attr('href', volumeInfo.prevLink)
    .attr('target', '_blank')
    .text('Read more...')
    .addClass('float-right')
    .appendTo($bookDescription);
})