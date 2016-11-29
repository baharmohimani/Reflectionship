/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var handlebars = require("express3-handlebars")

// Load all controllers in these js files. 
var home = require("./routes/HomeRoutes");
var emotion = require("./routes/EmotionTrackerRoutes");
var conversation = require("./routes/ConversationIdeasRoutes");
var relprofile = require("./routes/RelationshipProfileRoutes");
var switchusers = require("./routes/SwitchProfileRoutes");
var login = require("./routes/LoginRoutes");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("Intro HCI secret key"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
    app.use(express.errorHandler());
}

app.post('/getQuestion', function (req, res) {
    var qArr = ["Which parent do you identify with most? ", "What is your biggest pet peeve? ",
    "Can you tell if someone is lying?",
    "Do you have any irrational fears? ", "What is your favorite thing about yourself?",
    "What is something you regret doing? ",
    "What was the best kiss of your entire life?",
    "What is one of your guilty pleasures?",
    "When was the last time you cried? ",
    "What are you most grateful for?"];
    var qArrLen = qArr.length;
    var ranNum = Math.floor(Math.random() * (qArrLen - 1)) + 0;
    res.send(qArr[ranNum]);
});


// Add routes here
app.get("/", login.view);
app.get("/Home", home.view)

app.get("/RelationshipProfile/Info", relprofile.getProfileInfo);
app.get("/RelationshipProfile", relprofile.personal);
app.post("/RelationshipProfile/Save", relprofile.saveInfo);

app.get("/EmotionTracker/Info", emotion.getInfo);
app.get("/EmotionTracker", emotion.view);
app.post("/EmotionTracker/Save", emotion.saveInfo);

app.get("/ConversationIdeas", conversation.view);
app.get("/SwitchProfile", switchusers.view);


http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});