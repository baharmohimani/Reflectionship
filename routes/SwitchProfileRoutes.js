exports.view = function (req, res) {
    var SwitchInfo = {
        "AspectName": "Switch Profile",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("SwitchProfile", SwitchInfo);
    
};