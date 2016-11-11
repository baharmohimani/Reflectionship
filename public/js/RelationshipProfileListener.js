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
    $("#edit-button").click(editInfo);
    $("#save-button").click(saveInfo);
    $(".delete-active").click(deleteInfo);

    $("#save-button").hide();

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

function editInfo(event) {
    if ($(".edit-text td input").length > 0)
        return;

    $("#edit-button").hide()
    $("#delete-button").fadeIn(1000);
    $("#save-button").fadeIn(1000);

    $(".edit-text td").each(function () {
        var infoText = $(this).text();
        $(this).html("<input type='text' value='" + infoText + "'>");
    });

    $(".delete-active").each(function () {
        $(this).html("<a><i class='fa fa-times'></i></a>");
    });

    // Add an empty row for adding new subcategories.
    var tableBody = $(".edit-text").closest("tbody");
    console.log("Attach");
    console.log(tableBody);
    tableBody.append("<tr class='edit-text'><td class='subcategory'><input type='text' value=''></td><td class='subcategory-data'><input type='text' value=''></td><td class='delete-active'><a></a></td></tr>");
}

function saveInfo(event) {
    if ($(".edit-text td input").length == 0)
        return;

    $("#save-button").hide();
    $("#delete-button").hide();
    $("#edit-button").fadeIn(1000);

    $(".edit-text td input").each(function () {
        var parentRow = $(this).closest("td");
        parentRow.html(this.value);
    });

    $(".delete-active a").html

    // Remove any empty rows.
    $(".edit-text").each(function () {
        console.log($("this > .subcategory"));
        var categoryChild = $(this).children(".subcategory").text();
        var categoryChildData = $(this).children(".subcategory-data").text();

        if (categoryChild === "" && categoryChildData === "") {
            $(this).remove();
        }
    });
}

function deleteInfo(event) {
    console.log("Hello");
    var deleteRow = $(this).closest("tr");
    console.log(deleteRow);
    deleteRow.remove();
}