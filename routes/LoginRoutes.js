exports.view = function (req, res) {
    var LoginInfo = {
        "AspectName": "login",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/"
    };

    res.render("login", LoginInfo);
};