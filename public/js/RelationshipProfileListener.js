'use strict';

/* Holds the currently selected person's profile information. */
var ProfileInfo = null;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(".category").click(setActiveCategory);
    $("#save").click(writeData);
    $("#menu-toggle, .sidebar-nav li a").click(toggleMenu);

    // Load up the JSON data from the person's JSON file.
    ProfileInfo = {
        "AspectName": "Relationship Profile",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home",
        "CurrentName": "NOT AVAILABLE - SELECT PROFILE FROM PROFILE SELECTION SCREEN.",
        "CurrentID": -1,

        "AllProfiles": [
		{
		    "Name": "Jack",
		    "Info": ["Toast"],
		    "Likes": [],
		    "Dislikes": []
		},
		{
		    "Name": "Jill",
		    "Info": [],
		    "Likes": [],
		    "Dislikes": []
		}
        ]
    };
}

function setActiveCategory(event) {
    event.preventDefault();
    // Grab the parent of all of the categories.
    var categoryPar = $(this).closest("ul");

    // Set all categories to inactive initially.
    var categories = categoryPar.find(".category");
    categories.removeClass("active");

    // Then, set the one element that was clicked (this element) to active.
    $(this).addClass("active");
}

function writeData(event) {
    event.preventDefault();

    if (ProfileInfo) {
        $.ajax({
            url: "../php/RelationshipProfile.php",
            method: "post",
            data: { ProfileInfo },
            success: function (response) {
                alert(response);
            },
            failure: function (response) {
                alert(response);
            }
        });
    }
}

function toggleMenu(event) {
    event.preventDefault();

    // Changes the images of the toggle button.
    $("#toggle-right").toggleClass("active");
    $("#toggle-left").toggleClass("active");

    // Allows the sidebar to not be transparent.
    $("#sidebar-container").toggleClass("active");

    // Enables the hyperlink elements inside the sidebar.
    $(".sidebar-nav li a").toggleClass("active");
    $(".sidebar-nav li a").toggleClass("disabled");

    // Determines the color of the toggle button.
    $("#menu-toggle").toggleClass("menu-active");
    $("#menu-toggle").toggleClass("menu-inactive");
}