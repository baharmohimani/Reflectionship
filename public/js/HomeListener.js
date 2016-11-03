'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();

    // Disable all image texts initially.
    $(".img-text").animate({
        opacity: 0
    }, 0);
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
    // Grab the hyperlink parent of the image.
    var aParent = $(event.target).closest("a");
    
    // Grab the image and the text elements.
    var imageChild = aParent.find(".img-circle");
    var textChild = aParent.find(".img-text");

    // Make the image disappear, make the text appear.
    imageChild.hide();
    textChild.show();

    // In the background, make the hidden image child have no opacity so it can fade in.
    imageChild.animate({
        opacity: 0
    }, 0);

    // Animate the text bubble to make the text slowly fade in.
    textChild.animate({
        opacity: 1
    }, 500);
}

/*
 * Function that switches the aspect's text representation back to the 
 * original image. This function should only be called when the mouse leaves
 * the aspect image element.
 */
function textToImage(event) {
    // Grab the hyperlink parent of the image.
    var aParent = $(event.target).closest("a");

    // Grab the image and the text elements.
    var imageChild = $(aParent).find(".img-circle");
    var textChild = $(aParent).find(".img-text");

    // Make the text disappear, make the image appear.
    textChild.hide();
    imageChild.show();

    // In the background, make the hidden text child have no opacity so that it can fade in.
    textChild.animate({
        opacity: 0
    }, 0);

    // Animate the image to make the image slowly fade in.
    imageChild.animate({
        opacity: 1
    }, 500);
}
