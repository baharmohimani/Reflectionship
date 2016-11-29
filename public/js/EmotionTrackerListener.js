// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();

    $("#entries").hide();
    $.get("/EmotionTracker/Info", processInfo)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Setup listeners.
    $("#add-entry-btn").click(saveEntry);
    $("#remove-entry-btn").click(removeEntry);
    $("#to-record").click(toRecord);
    $("#to-log").click(toLog);
    $("#question").click(showHelp);
    $("#add-details-btn").click(addDetails);
    $("#back-btn").click(goBack);
}

function goBack() {
    $("#emotion-bar").removeClass("details");
}

function addDetails() {
    $("#emotion-bar").addClass("details");
}

function showHelp() {
    window.alert("This is a log to track your emotions throughout your relationship with the currently selected person.");
}

function toRecord() {
    $("#entries").hide();
    $("#emotion-bar").fadeIn();
}

function toLog() {
    $("#emotion-bar").hide();
    $("#entries").fadeIn();

    var objDiv = document.getElementById("emotion-list");
    objDiv.scrollTop = objDiv.scrollHeight + 3000;
}

function removeEntry(event) {
    var SaveDataJSON = { jsonStr: "" };
    $.ajax({
        type: "POST",
        url: "/EmotionTracker/Save",
        data: SaveDataJSON
    });
    $.get("/EmotionTracker/Info", processInfo);

    // Display alert.
    $("#alert-element").addClass("alert-info");
    $("#alert-element").html("<strong>Success!</strong> You have removed the most recent entry.");

    $("#notification-screen").addClass("active");
    $("#alert-element").fadeTo(2000, 0).slideUp(100, function () {
        $("#notification-screen").removeClass("active");
        $("#alert-element").removeClass("alert-info");
        $("#alert-element").fadeTo(0, 1.0);
    });
}

function saveEntry(event) {
    // Need to figure out which option was selected.
    var opsel = $(".br-current-rating");
    var emotion = opsel.text();
    var date = new Date();
    var month = ""
    switch (date.getMonth()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }


    var currDate = (month) + " " + (date.getDate());

    var details = $("#comment").val();

    // Finally, save data to JSON file.
    var SaveData =
    {
        Emotion: emotion,
        Date: currDate,
        Details: details
    };

    var SaveDataJSON = { jsonStr: (JSON.stringify(SaveData)) };

    $.ajax({
        type: "POST",
        url: "/EmotionTracker/Save",
        data: SaveDataJSON
    });

    $.get("/EmotionTracker/Info", processInfo);

    // Display alert.
    $("#alert-element").addClass("alert-success");
    $("#alert-element").html("<strong>Success!</strong> You have added a new entry.");

    $("#notification-screen").addClass("active");
    $("#alert-element").fadeTo(2000, 0).slideUp(100, function () {
        $("#notification-screen").removeClass("active");
        $("#alert-element").removeClass("alert-success");
        $("#alert-element").fadeTo(0, 1.0);
    });

    $("#emotion-bar").removeClass("details");
}

function processInfo(result) {
    var UserID = parseInt(result["UserID"]);
    var User = result["AllProfiles"][UserID];
    $("#name-text").text("How do you feel about " + User["Name"] + " today?");

    var EmotionHTML = "";  // Holds all of the HTML code for the emotion list.

    for (var i = 0; i < User["Entries"].length; i++) {
        var entry = User["Entries"][i];
        var color = null;
        switch (entry["Emotion"]) {
            case "Happy":
                color = "alert-success";
                break;
            case "Content":
                color = "alert-info";
                break;
            case "Discontent":
                color = "alert-warning";
                break;
            case "Unhappy":
                color = "alert-danger";
                break;
            default:
                color = "alert-info";
                break;
        }
        EmotionHTML = EmotionHTML + "<a href='#' class='list-group-item list-group-item-action " + color + "'>";
        EmotionHTML = EmotionHTML + "<h4 class='list-group-item-heading'>" + entry["Date"] + "</h4>";
        EmotionHTML = EmotionHTML + "<p class='list-group-item-text'>" + entry["Details"] + "</p></a>";
    }

    $("#emotion-list").html(EmotionHTML);
}