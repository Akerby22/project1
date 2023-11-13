$(document).ready(function() {
    const gridContainer = $('<div class="grid-container"></div>');
    $('body').append(gridContainer);

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = $('<div class="box"></div>');
            box.data('clicked', false);
            gridContainer.append(box);
        }
    }

    $('.box').on('click', function() {
        const clicked = $(this).data('clicked');
        if (clicked) {
            $(this).css('background-color', 'black');
        } else {
            $(this).css('background-color', 'grey');
        }
        $(this).data('clicked', !clicked);
    });
});