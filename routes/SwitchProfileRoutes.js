exports.view = function (req, res) {
    var SwitchInfo = {
        "AspectName": "Switch Profile",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/"
    };

    res.render("SwitchProfile", SwitchInfo);
};