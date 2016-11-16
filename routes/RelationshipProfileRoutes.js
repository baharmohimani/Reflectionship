/* Loads the relationship profile page. */

var ProfileInfo = {
    "AspectName": "Relationship Profile",
    "HomeButton": "../images/HomeSymbol.png",
    "HomeLink": "/Home",
    "ProfileName": "Obama",
    "ProfileImage": "../images/ProfileImage.png",
    "CategoryData": {}
}

var PersonalInfo = {
    "CategoryDesc": "Personal Info",
    "TableHeaderInfo": "Information",
    "TableHeaderData": "Data",
    "TableBodyRows": [
        {
            "Subcategory": "Date of Birth",
            "SubcategoryInfo": "July 4th, 1776"
        },
        {
            "Subcategory": "Age",
            "SubcategoryInfo": "21"
        },
        {
            "Subcategory": "Gender",
            "SubcategoryInfo": "Male"
        },
        {
            "Subcategory": "Religious Belief",
            "SubcategoryInfo": "Freedom"
        }
    ]
}

var Likes = {
    "CategoryDesc": "Likes",
    "TableHeaderInfo": "Favorites",
    "TableHeaderData": "Data",
    "TableBodyRows": [
        {
            "Subcategory": "Color",
            "SubcategoryInfo": "Red, White, and Blue"
        },
        {
            "Subcategory": "Animal",
            "SubcategoryInfo": "Bald Eagle"
        },
        {
            "Subcategory": "Food",
            "SubcategoryInfo": "Independence"
        }
    ]
}

var Dislikes = {
    "CategoryDesc": "Dislikes",
    "TableHeaderInfo": "Not So Favorited",
    "TableHeaderData": "Data",
    "TableBodyRows": [
        {
            "Subcategory": "British Monarch",
            "SubcategoryInfo": "King George X"
        },
        {
            "Subcategory": "Drink",
            "SubcategoryInfo": "Oppression"
        }
    ]
}

exports.personal = function (req, res) {		
	var fs = require('fs');
    ProfileInfo.CategoryData = PersonalInfo;
    res.render("RelationshipProfile", ProfileInfo);
};

exports.likes = function (req, res) {
    ProfileInfo.CategoryData = Likes;
    res.render("RelationshipProfile", ProfileInfo);
}

exports.dislikes = function (req, res) {
    ProfileInfo.CategoryData = Dislikes;
    res.render("RelationshipProfile", ProfileInfo);
}