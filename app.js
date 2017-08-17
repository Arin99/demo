var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/blog", {
        templateUrl : "main.html",
        controller : "blogController"
    })
    .when("/office/:id", {
        templateUrl : "red.html",
		controller : "officeController"
    })
    
    .otherwise({
				redirectTo : '/blog'
	});
});
