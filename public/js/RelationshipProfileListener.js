var DetailID = "Info";

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    // Set default appearance.
    $("#save-button").hide();
    $.get("/RelationshipProfile/Info", endSwitch);
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
    $("#save-button").click(saveInfo);

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
        SaveData.push({
            Subcategory: $(this).children(".subcategory").text(),
            SubcategoryInfo: $(this).children(".subcategory-data").text()
        });
    });

    var SaveDataJSON = { detail: DetailID, jsonStr: (JSON.stringify(SaveData)) };

    $.post("/RelationshipProfile/Save", SaveDataJSON);
}

function deleteInfo(event) {
    var deleteRow = $(this).closest("tr");
    deleteRow.remove();
}

function switchInfo(event) {
    DetailID = "Info";
    $.get("/RelationshipProfile/Info", endSwitch);
}

function switchLikes(event) {
    DetailID = "Likes";
    $.get("/RelationshipProfile/Info", endSwitch);
}

function switchDislikes(event) {
    DetailID = "Dislikes";
    $.get("/RelationshipProfile/Info", endSwitch);
}

function endSwitch(result) {
    var UserID = parseInt(result["UserID"]);
    var User = result["AllProfiles"][UserID];
    $("#profile-title").text(User["Name"] + "'s " + User[DetailID]["CategoryDesc"]);
    $("#info").text(User["Name"] + "'s Info");
    $("#likes").text(User["Name"] + "'s Likes");
    $("#dislikes").text(User["Name"] + "'s Dislikes");

    var BodyHTML = "";  // Holds all of the HTML code for the table body.

    for (var i = 0; i < User[DetailID]["TableBodyRows"].length; i++) {
        var item = User[DetailID]["TableBodyRows"][i];
        BodyHTML = BodyHTML + "<tr class='edit-text'>" +
            "<td class='subcategory'>" + item.Subcategory + "</td>" +
             "<td class='subcategory'>" + item.SubcategoryInfo + "</td>" +
             "<td class='delete-active'></td></tr>";
    }

    $("#profile-body").html(BodyHTML);

    // Re-register a few listeners.
    $(".delete-active").click(deleteInfo);
}