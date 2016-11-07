exports.view = function (req, res) {
    var EmotionInfo = {
        "AspectName": "Emotion Tracker",
        "HomeButton": "../images/HomeSymbol.png",
        "HomeLink": "/Home"
    };

    res.render("EmotionTracker", EmotionInfo);
};

openGraph("Pie Chart");

function openGraph(graphType) {
    var i;
    var x = document.getElementsByClassName("graph");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(graphType).style.display = "block"; 
}