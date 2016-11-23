// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
    $("#emotion-list").hide();
    $("#delete-btn").hide();
    $("#emotion-list-blocker").hide();
	$.get("/EmotionTrackerRedone2/Info", processInfo)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// Setup listeners.
	$("#record").click(saveEntry);
	$("#reset").click(removeEntry);
    $("#to-record").click(toRecord);
    $("#to-log").click(toLog);
    $("#question").click(showHelp);
}

function showHelp() {
    window.alert("This is a log to track your emotions throughout your relationship with the currently selected person.");
    console.log("HOY");
}

function toRecord() {
    $("#emotion-bar").fadeIn();
    $("#emotion-list").fadeOut();
    $("#emotion-list-blocker").fadeOut();
    $("#delete-btn").fadeOut();
    $("#add-btn").fadeIn();
}

function toLog() {
    $("#emotion-bar").fadeOut();
    $("#emotion-list").fadeIn();
    $("#emotion-list-blocker").fadeIn();
    $("#delete-btn").fadeIn();
    $("#add-btn").fadeOut();
        
    var objDiv = document.getElementById("emotion-list");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function removeEntry(event) {
	$("#emotion-list a").last().remove();

	var SaveDataJSON = { jsonStr: "" };
	$.post("/EmotionTracker/Save", SaveDataJSON, function(data) {
		$.get("/EmotionTrackerRedone2/Info", processInfo);
	});
}

function saveEntry(event) {
	// Need to figure out which option was selected.
	var opsel = $(".br-current-rating");
	var emotion = opsel.text();
	var date = new Date();
	var month = ""
	switch(date.getMonth()){
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
    
    $.post("/EmotionTracker/Save", SaveDataJSON, function(data) {
		$.get("/EmotionTrackerRedone2/Info", processInfo);
	});
}

function processInfo(result) {
    var UserID = parseInt(result["UserID"]);
    var User = result["AllProfiles"][UserID];
    $("#name-text").text("Emotion Entry For: " + User["Name"]);
    
    console.log("Hello");
    var EmotionHTML = "";  // Holds all of the HTML code for the emotionlist.

    for (var i = 0; i < User["Entries"].length; i++) {
        var entry = User["Entries"][i];
		var color = null;
		switch(entry["Emotion"]) {
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