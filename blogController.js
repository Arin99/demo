app.controller("blogController",['myService', function blogCotroller(myService) {
	var scope = this;
	myService.getData("blog.json").then (function Success(response) {
					scope.records = response.data;
				}, function Error(response) {
				scope.records = response.statusText;
				});
	
	
    
}]);
