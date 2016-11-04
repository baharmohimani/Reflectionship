exports.view = function (req, res) {
    var LoginInfo = {
        "AspectName": "Login",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("login", LoginInfo);
};