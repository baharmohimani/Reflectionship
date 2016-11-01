'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".image-switch").mouseenter(imageToText);
    $(".image-switch").mouseleave(textToImage);
}

/*
 * Function that switches the aspect's image to their respective aspect text
 * representation. This function should only be called when the mouse enters
 * the aspect image element.
 */
function imageToText(event) {
    console.log("Mouse has entered this element!");
    $(this).src("");
}

/*
 * Function that switches the aspect's text representation back to the 
 * original image. This function should only be called when the mouse leaves
 * the aspect image element.
 */
function textToImage(event) {
    console.log("Mouse has left this element!");
}
