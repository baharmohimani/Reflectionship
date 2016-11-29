// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();

    $.get("/SwitchProfile/Info", processUsers);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#delete-user-btn").click(deletePrompt);    
}

var DeleteMode = false;

function deletePrompt() {
    if (DeleteMode === false) {
        $("body").find(".delete-active").each(function () {
            $(this).find("button").each(function () {
                $(this).removeClass("btn-success");
                $(this).removeClass("disabled");
                $(this).addClass("btn-danger");
                $(this).text("Delete");
            });
        });

        $(this).text("Exit Mode");
        $(this).addClass("btn-warning");
        $(this).removeClass("btn-primary");

        DeleteMode = true;
    } else {
        $.get("/SwitchProfile/Info", processUsers);
        $(this).text("Delete Users");
        $(this).removeClass("btn-warning");
        $(this).addClass("btn-primary");

        DeleteMode = false;
    }
}

function processUsers(result) {
    var CurrUser = parseInt(result["UserID"]);
    var Username = result["AllProfiles"][CurrUser];

    var BodyHTML = "";

    for (var i = 0; i < result["AllProfiles"].length; i++) {
        var CurrName = result["AllProfiles"][i]["Name"];
        if (i === CurrUser) {
            BodyHTML = BodyHTML + "<tr class='edit-text active'>" + "<td class='name-category'>" + CurrName + "</td>";
            BodyHTML = BodyHTML + "<td class='delete-active'><button type='button' class='btn btn-success disabled'>Current</button></td></tr>";
        }
        else {
            BodyHTML = BodyHTML + "<tr class='edit-text'>" + "<td class='name-category'>" + CurrName + "</td>";
            BodyHTML = BodyHTML + "<td class='delete-active'><button type='button' class='btn btn-success'>Select</button></td></tr>";
        }
    }

    $("#profile-body").html(BodyHTML);
}

function editUsers() {

}