'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".category").click(setActiveCategory);
}

function setActiveCategory(event) {
    preventDefault();
    // Grab the parent of all of the categories.
    var categoryPar = $(this).closest("ul");

    // Set all categories to inactive initially.
    var categories = categoryPar.find(".category");
    categories.removeClass("active");

    // Then, set the one element that was clicked (this element) to active.
    $(this).addClass("active");
}