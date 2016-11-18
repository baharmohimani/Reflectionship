'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log("included");

    $('#emotionTracker').hover(function (e) {
        e.preventDefault();

        var emotion = $('#emotionTracker').val();
        console.log("value: " + emotion);        
    })


}

$(function () {
    function ratingEnable() {

        $('#example-movie').barrating('show', {
            theme: 'bars-movie'
        });

        // SETS THE DEFAULT STATUS.
        $('#example-movie').barrating('set', 'Not Happy');

        var currentRating = $('#example-fontawesome-o').data('current-rating');

        $('.stars-example-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);

        $('.stars-example-fontawesome-o .clear-rating').on('click', function (event) {
            event.preventDefault();

            $('#example-fontawesome-o')
                .barrating('clear');
        });

        $('#example-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function (value, text) {
                if (!value) {
                    $('#example-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-example-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-example-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function (value, text) {
                $('.stars-example-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });
    }

    function ratingDisable() {
        $('select').barrating('destroy');
    }

    $('.rating-enable').click(function (event) {
        event.preventDefault();

        ratingEnable();

        $(this).addClass('deactivated');
        $('.rating-disable').removeClass('deactivated');
    });

    $('.rating-disable').click(function (event) {
        event.preventDefault();

        ratingDisable();

        $(this).addClass('deactivated');
        $('.rating-enable').removeClass('deactivated');
    });

    ratingEnable();

    
});
