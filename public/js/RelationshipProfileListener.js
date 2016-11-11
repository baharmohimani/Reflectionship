'use strict';

var DetailID = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    // Set default appearance.
    $("#save-button").hide();

    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Add listeners
    $(".category").click(setActiveCategory);
    $("#menu-toggle, .sidebar-nav li a").click(toggleMenu);

    $("#edit-button").click(editInfo);
    $("#save-button").click(saveInfoEvent);

    $(".delete-active").click(deleteInfo);

    $("#info").click(switchInfo);
    $("#likes").click(switchLikes);
    $("#dislikes").click(switchDislikes);
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
    tableBody.append("<tr class='edit-text'><td class='subcategory'><input type='text' value=''></td><td class='subcategory-data'><input type='text' value=''></td><td class='delete-active'><a></a></td></tr>");
}

function saveInfo() {
    if ($(".edit-text td input").length == 0)
        return;

    $("#save-button").hide();
    $("#delete-button").hide();
    $("#edit-button").fadeIn(1000);

    $(".edit-text td input").each(function () {
        var parentRow = $(this).closest("td");
        parentRow.html(this.value);
    });

    $(".delete-active a").html("")

    // Remove any empty rows.
    $(".edit-text").each(function () {
        var categoryChild = $(this).children(".subcategory").text();
        var categoryChildData = $(this).children(".subcategory-data").text();

        if (categoryChild === "" && categoryChildData === "") {
            $(this).remove();
        }
    });

    // Finally, save data to JSON file.
    var SaveData = [];
    $(".edit-text").each(function () {
        console.log("Running!");
        SaveData.push({
            Subcategory: $(this).children(".subcategory").text(),
            SubcategoryInfo: $(this).children(".subcategory-data").text()
        });
        console.log(SaveData);
    });

    var SaveDataJSON = { detail: DetailID, jsonStr: (JSON.stringify(SaveData)) };
    console.log(SaveDataJSON);

    $.post("/RelationshipProfile/Save", SaveDataJSON);
}

function saveInfoEvent(event) {
    saveInfo();
}

function deleteInfo(event) {
    console.log();
    var deleteRow = $(this).closest("tr");
    deleteRow.remove();
}

function switchInfo(event) {
    $.get("/RelationshipProfile/0", endSwitch);
    DetailID = 0;
}

function switchLikes(event) {
    $.get("/RelationshipProfile/1", endSwitch);
    DetailID = 1;
}

function switchDislikes(event) {
    $.get("/RelationshipProfile/2", endSwitch);
    DetailID = 2;
}

function endSwitch(result) {
    $("#profile-title").text(result["ProfileUsername"] + "'s " + result["Detail"]["CategoryDesc"]);
    console.log(result["Detail"]["TableBodyRows"].length);

    var BodyHTML = "";  // Holds all of the HTML code for the table body.

    for (var i = 0; i < result["Detail"]["TableBodyRows"].length; i++) {
        var item = result["Detail"]["TableBodyRows"][i];
        BodyHTML = BodyHTML + "<tr class='edit-text'>" +
            "<td class='subcategory'>" + item.Subcategory + "</td>" +
             "<td class='subcategory'>" + item.SubcategoryInfo + "</td>" +
             "<td class='delete-active'><a></a></td>";
    }

    $("#profile-body").html(BodyHTML);

    // Re-register a few listeners.
    $(".delete-active").click(deleteInfo);
    $("#save-button").click(saveInfoEvent);

    saveInfo();
}