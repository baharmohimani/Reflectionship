 /* Loads the relationship profile page. */

exports.view = function (req, res) {
    var ProfileInfo = {
        "AspectName": "Relationship Profile",
        "ProfileName": req.params.ProfileName,
        "ProfileImage": "../images/ProfileImage.png",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/"
    };

    res.render("RelationshipProfile", ProfileInfo);
};