// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
    $.get("/SwitchProfile/Info", processUsers);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#add-user-btn").click(addUser);
    $("#delete-user-btn").click(deletePrompt);
}

function addUser() {

    console.log($("#comment").val());
    if ($("#comment").val() === "") {
        return;
    }

    var SaveData = {
        Name: $("#comment").val(),
        Info: {
            CategoryDesc: "Personal Info",
            TableHeaderInfo: "Information",
            TableHeaderData: "Data",
            TableBodyRows: [{}]
        },
        Likes: {
            CategoryDesc: "Personal Info",
            TableHeaderInfo: "Information",
            TableHeaderData: "Data",
            TableBodyRows: [{}]
        },
        Dislikes: {
            CategoryDesc: "Personal Info",
            TableHeaderInfo: "Information",
            TableHeaderData: "Data",
            TableBodyRows: [{}]
        },
        Entries: []
    };
    $.post("/SwitchProfile/AddUser", SaveData);
    $.get("/SwitchProfile/Info", processUsers);
}

var DeleteMode = false;

function deletePrompt() {
    if (DeleteMode === false) {
        DeleteMode = true;
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
    } else {
        DeleteMode = false;
        $(this).text("Delete Users");
        $(this).removeClass("btn-warning");
        $(this).addClass("btn-primary");
        $.get("/SwitchProfile/Info", processUsers);
    }
}

function modifyUser() {
    if (DeleteMode === false) {
        var IDCtr = 0;
        var userList = $(".user-btn");

        for (var i = 0; i < userList.length; ++i, ++IDCtr) {
            if (userList[i] === this) {
                $(".disabled").text("Select");
                $(".disabled").removeClass("disabled");
                $(this).text("Current");
                $(this).addClass("disabled");
                break;
            }
        }

        var SaveData = { ID: IDCtr };
        $.post("/SwitchProfile/ChangeUser", SaveData);
        $.get("/SwitchProfile/Info", processUsers);
    }
    else {
        if ($(this).hasClass("disabled")) {
            console.log("Hello");
            return;
        }

        var IDCtr = 0;
        var userList = $(".user-btn");

        for (var i = 0; i < userList.length; ++i, ++IDCtr) {
            if (userList[i] === this) {
                break;
            }
        }

        var SaveData = { ID: IDCtr };
        $.post("/SwitchProfile/DeleteUser", SaveData);
        $.get("/SwitchProfile/Info", processUsers);
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
            BodyHTML = BodyHTML + "<td class='delete-active'><button type='button' class='user-btn btn btn-success disabled'>Current</button></td></tr>";
        }
        else {
            BodyHTML = BodyHTML + "<tr class='edit-text'>" + "<td class='name-category'>" + CurrName + "</td>";
            BodyHTML = BodyHTML + "<td class='delete-active'><button type='button' class='user-btn btn btn-success'>Select</button></td></tr>";
        }
    }

    $("#profile-body").html(BodyHTML);

    $(".user-btn").click(modifyUser);
}