'use strict';

var datainfo = require("../public/js/examples.js");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".category").click(setActiveCategory);
    $(".add").click(addCategory);
    $(".remove").click(removeCategory);
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

function addCategory(event) {
    console.log("Hello");
    // Then, remove the 'last' class element, new element will be last.
    $(".last").removeClass("last");

    // Then, find the parent unsorted list.
    var categoryPar = $(this).closest("ul");

    // Then, add the new element.
    categoryPar.append("<li class='category'> <a href='/RelationshipProfile/Personal'>New Category</a> </li>");

    var lastIndex = $(".category").length - 1;
    var lastElem = $(".category").get(lastIndex);
    $(lastElem).addClass("last");
}

function removeCategory(event) {
    console.log($(".category").length);
    
    $(".category.last").remove();

    $($(".category").get($(".category").length - 1)).addClass("last");
    
    // Then, find the parent unsorted list.
    var categoryPar = $(this).closest("ul");
}