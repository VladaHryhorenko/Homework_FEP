const $form = $('#search-form');
const $input = $('[name = "book-name"]');
const $list = $("#book-list");
let $books = [];
const $button = $('#button-submit');
const $currentBook = $('#current-book');


$currentBook.hide();



const createContent = (data) => {
    $list.empty();
    $books = data;
    data.forEach((item) => {
         $('<li>')
         .append(
            $('<a href="">')
            .text(item.volumeInfo.title)
         )
        .attr('data-id', item.id)
        .addClass('list-group-item')
        .appendTo($list)
    });
}

const getBooks = (text) => {
    $.get("https://www.googleapis.com/books/v1/volumes", {q: text})
    .done((response) =>
        createContent(response.items))
    .fail((error) => {
        console.log(error);
    })
}

$form.on('submit', (event) => { // on = обработчик собітий
    event.preventDefault();
    const text = $input.val().replaceAll(' ', '+'); // значение инпута val()
    if (text) {
        getBooks(text);
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



