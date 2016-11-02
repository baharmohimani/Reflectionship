'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();

    // Disable all image texts initially.
    $(".img-text").hide();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".aspect-circle").mouseenter(imageToText);
    $(".aspect-circle").mouseleave(textToImage);
}

/*
 * Function that switches the aspect's image to their respective aspect text
 * representation. This function should only be called when the mouse enters
 * the aspect image element.
 */
function imageToText(event) {
    console.log("Mouse has entered this element!");

    // Grab the hyperlink parent of the image.
    var aParent = $(event.target).closest("a");
    
    // Grab the image and the text elements.
    var imageChild = $(aParent).find(".img-circle");
    var textChild = $(aParent).find(".img-text");

    // Make the image disappear, make the text appear.
    imageChild.hide();
    textChild.fadeIn();
}

/*
 * Function that switches the aspect's text representation back to the 
 * original image. This function should only be called when the mouse leaves
 * the aspect image element.
 */
function textToImage(event) {
    console.log("Mouse has left this element!");

    // Grab the hyperlink parent of the image.
    var aParent = $(event.target).closest("a");

    // Grab the image and the text elements.
    var imageChild = $(aParent).find(".img-circle");
    var textChild = $(aParent).find(".img-text");

    // Make the text disappear, make the image appear.
    textChild.hide();
    imageChild.fadeIn();
}
