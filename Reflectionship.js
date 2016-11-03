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
var relaprofile = require("./routes/RelationshipProfileRoutes");
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

// Add routes here
app.get("/", home.view);

/* When switching to the profile name, we need to send in the name 
of the person whose profile we want to look at. */
app.get("/RelationshipProfile/:ProfileName", relaprofile.view);
app.get("/EmotionTracker", emotion.view);
app.get("/ConversationIdeas", conversation.view);
app.get("/SwitchProfile", switchusers.view);
app.get("/Login", login.view);

http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});
