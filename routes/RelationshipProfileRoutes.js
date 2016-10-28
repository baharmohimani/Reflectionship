/* Loads the relationship profile page. */

exports.view = function (req, res) {
    var ProfileInfo = {
        "ProfileName": req.params.ProfileName,
        "ProfileImage": "../images/ProfileImage.png",
        "HomeButton": "../images/HomeSymbol.png"
    };

    res.render("RelationshipProfile", ProfileInfo);
};