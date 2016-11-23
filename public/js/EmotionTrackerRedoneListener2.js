// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
	$.get("/EmotionTrackerRedone2/Info", processInfo)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// Setup listeners.
	$("#record").click(saveEntry);
	$("#reset").click(removeEntry);
}

function removeEntry(event) {
	$("#emotion-list a").first().remove();

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

	var properDate = "2016" + "-" + date.getMonth() + "-" + date.getDate();
	//console.log(date.getYear());
	//console.log(date.getMonth());
	//console.log(date.getDate());
	console.log(properDate);

	
    // Finally, save data to JSON file.
    var SaveData = 
    {
    	Emotion: emotion,
    	Date: currDate,
    	Details: details,
    	properDate: properDate
	};
	
    var SaveDataJSON = { jsonStr: (JSON.stringify(SaveData)) };

    $.post("/EmotionTracker/Save", SaveDataJSON);
	$.get("/EmotionTrackerRedone2/Info", processInfo);
}
/*
 * GET home page.
 */
function keysrt(key, desc) {
    return function (a, b) {
        return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
}

function processInfo(result) {
    var UserID = parseInt(result["UserID"]);
    var User = result["AllProfiles"][UserID];
    $("#name-text").text("Emotion Entry For: " + User["Name"]);

    var EmotionHTML = "";  // Holds all of the HTML code for the emotionlist.

    //console.log(User["Entries"]);
    User["Entries"].sort(keysrt('properDate', false));
    //console.log(User["Entries"]);
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