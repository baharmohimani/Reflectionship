exports.view = function (req, res) {
    var SwitchInfo = {
        "AspectName": "Switch Profile",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("SwitchProfile", SwitchInfo);
};

exports.switch = function (req) {
    // Profile["UserID"] = JSON.parse(req.body.UserID);
    // fs.writeFile("./public/json/RelationshipProfile.json", JSON.stringify(Profile), 'utf8');
}