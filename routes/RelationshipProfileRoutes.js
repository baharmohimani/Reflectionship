/* Loads the relationship profile page. */

exports.personal = function (req, res) {
    var Profile = require("./public/json/RelationshipProfile.json");
    res.render("RelationshipProfile");
};