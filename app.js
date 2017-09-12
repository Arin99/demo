var app = angular.module("myApp", ['ngRoute', 'ngMaterial', 'ngSanitize', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/blog", {
        templateUrl : "main.html",
        controller : "blogController",
        controllerAs : "blog"
    })
    .when("/office/:id", {
        templateUrl : "red.html",
		controller : "officeController",
		controllerAs : "office"
    })
    
    .otherwise({
				redirectTo : '/blog'
	});
});
