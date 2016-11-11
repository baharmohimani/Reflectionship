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

app.post('/getQuestion', function(req, res){
    var qArr = ["Which parent do you identify with most? ", "What is your biggest pet peeve? ",
     "If you could fix one world problem, what would it be?", "If you only had three wishes, what would they be? ", 
     "What is your favorite thing about yourself?", "What is something you regret doing? ", "If you could have any job in the world, what would it be?",
     "When was the last time you cried? "];

    //Get random index from qArr    
    var qArrLen = qArr.length; 
    var ranNum = Math.floor(Math.random()* (qArrLen - 1)) + 0;  

    res.send(qArr[ranNum]); 
});

// Add routes here
app.get("/", login.view);
app.get("/Home", home.view);

app.get("/RelationshipProfile/", relprofile.profileInfo);
app.get("/RelationshipProfile/:DetailID", relprofile.getDetails);
app.post("/RelationshipProfile/Save", relprofile.submitInfo);

app.get("/EmotionTracker", emotion.view);
app.get("/ConversationIdeas", conversation.view);

app.get("/SwitchProfile", switchusers.view);
app.post("/SwitchProfile/Save", switchusers.switch);

http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});