// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#another-btn").on('click', function () {
        $.post('/getQuestion', null, function (res) {
            $("#fname").val(res);
        });
    });
}
