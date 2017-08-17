var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    this.records = [
       {
		   "id"   :1,
            "Name" : "Arindam",
            "Title" : "India",
			"Date" : "20/09/1993",
			"User" : "A"
			
        },{
			"id"   :2,
            "Name" : "Anirban",
            "Title" : "Pakistan",
			"Date" : "20/09/1993",
			"User" : "B"
        },{
			"id"   :3,
            "Name" : "Raj",
            "Title" : "Bangladesh",
			"Date" : "20/09/1993",
			"User" : "C"
        },{
			"id"   :4,
            "Name" : "Suman",
            "Title" : "Srilanka",
			"Date" : "20/09/1993",
			"User" : "D"
        }
    ]
});
