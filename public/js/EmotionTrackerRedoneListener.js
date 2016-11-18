// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
	$.get("/EmotionTrackerRedone/Info", processInfo)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

}

function processInfo(result) {
    var UserID = parseInt(result["UserID"]);
    var User = result["AllProfiles"][UserID];
    $("#name-text").text("Emotion Entry For: " + User["Name"]);

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